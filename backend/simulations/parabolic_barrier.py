import numpy as np
import scipy.sparse as sparse
from scipy.sparse.linalg import splu

class ParabolicBarrier:
    def __init__(self, resolution=4000, dt=0.5, x_begin=-200.0, x_end=200.0):
        self.resolution = resolution
        self.dt = dt
        self.x, self.dx = np.linspace(x_begin, x_end, resolution, retstep=True)
        self.psi = None
        self.potential = None

        # store LU factors here once they're computed
        self._lu_factor = None
        self._explicit = None

    def setup_wave_packet(self, sigma0=5.0, k0=1.0, mu=0):
        """Initialize the Gaussian wave packet."""
        normalization = (2.0 * np.pi * sigma0**2) ** (-0.25)
        gauss_term = np.exp(-(self.x - mu) ** 2 / (4.0 * sigma0**2))
        velocity_term = np.exp(1.0j * k0 * self.x)
        self.psi = gauss_term * normalization * velocity_term

    def setup_potential(self, barrier_coefficient=0.0001):
        """Set up a parabolic potential barrier."""
        self.potential = barrier_coefficient * (self.x**2)


    def _setup_matrices(self):
        """
        Construct and factorize the implicit matrix (for the Crank–Nicolson scheme),
        and construct the explicit matrix. We only do this once per parameter set.
        """
        # diagonal elements of the Hamiltonian
        h_diag = np.ones(self.resolution) / self.dx**2 + self.potential
        h_non_diag = np.ones(self.resolution - 1) * (-0.5 / self.dx**2)

        # build the Hamiltonian in CSC format to avoid conversion warnings
        hamiltonian = sparse.diags(
            [h_diag, h_non_diag, h_non_diag],
            [0, 1, -1],
            shape=(self.resolution, self.resolution),
            format='csc'  # key: keep a single format
        )

        # I in CSC format as well
        identity = sparse.eye(self.resolution, format='csc')

        # Crank–Nicolson matrices
        # implicit = (I - (dt/2i) * H)
        # explicit = (I + (dt/2i) * H)
        half_step = (self.dt / 2.0) * (1j**-1)  # or -1j to be explicit
        # Actually, 1 / (2.0j) is the same as -0.5j.  Just keep it consistent.
        # We'll do:
        alpha = self.dt / (2.0j)

        implicit = identity - alpha * hamiltonian
        explicit = identity + alpha * hamiltonian

        # Factorize once (Splu object can be reused)
        # If your matrix is complex, splu still works (it has a complex version).
        self._lu_factor = splu(implicit)
        self._explicit = explicit

    def evolve(self):
        """Perform one time step evolution using the Crank-Nicolson method."""
        # Factorize if not yet done (or if matrix changed)
        if self._lu_factor is None or self._explicit is None:
            self._setup_matrices()

        # Instead of computing inv(implicit).dot(explicit) every time,
        # we reuse the factor to solve: LU x = self._explicit.dot(psi)
        rhs = self._explicit.dot(self.psi)
        self.psi = self._lu_factor.solve(rhs)

    def run(self, barrier_coefficient=0.0001, steps=100):
        self.setup_wave_packet()
        self.setup_potential(barrier_coefficient)
        self._setup_matrices()
        
        results = []
        for _ in range(steps):
            self.evolve()
            results.append(self.get_data())
        return results

    # different from rect barrier for now
    def get_data(self):
        """Return the current simulation data."""
        probability = abs(self.psi)**2
        normalization = np.sum(probability)
        probability /= normalization
        self.psi /= normalization**0.5

        return {
            "x": self.x.tolist(),
            "psi_real": self.psi.real.tolist(),
            "psi_imag": self.psi.imag.tolist(),
            "potential": self.potential.tolist(),
            "probability": probability.tolist(),
        }
