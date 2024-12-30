import numpy as np
import scipy.sparse as sparse
from scipy.sparse.linalg import inv

class ParabolicBarrier:
    def __init__(self, resolution=500, dt=0.5, x_begin=-200.0, x_end=200.0):
        self.resolution = resolution
        self.dt = dt
        self.x, self.dx = np.linspace(x_begin, x_end, resolution, retstep=True)
        self.psi = None
        self.potential = None

    def setup_wave_packet(self, sigma0=5.0, k0=1.0, mu=0):
        """Initialize the Gaussian wave packet."""
        normalization = (2.0 * np.pi * sigma0**2) ** (-0.25)
        gauss_term = np.exp(-(self.x - mu) ** 2 / (4.0 * sigma0**2))
        velocity_term = np.exp(1.0j * k0 * self.x)
        self.psi = gauss_term * normalization * velocity_term

    def setup_potential(self, barrier_coefficient=0.0001):
        """Set up a parabolic potential barrier."""
        self.potential = barrier_coefficient * (self.x**2)

    def evolve(self):
        """Perform one time step evolution using the Crank-Nicolson method."""
        h_diag = np.ones(self.resolution) / self.dx**2 + self.potential
        h_non_diag = np.ones(self.resolution - 1) * (-0.5 / self.dx**2)
        hamiltonian = sparse.diags([h_diag, h_non_diag, h_non_diag], [0, 1, -1])

        implicit = sparse.eye(self.resolution) - self.dt / 2.0j * hamiltonian
        explicit = sparse.eye(self.resolution) + self.dt / 2.0j * hamiltonian
        evolution_matrix = inv(implicit).dot(explicit)

        self.psi = evolution_matrix.dot(self.psi)

    def run(self, barrier_coefficient, steps=100):
        """Run the simulation for a specified number of steps."""
        self.setup_wave_packet()
        self.setup_potential(barrier_coefficient)
        results = []
        for _ in range(steps):
            self.evolve()
            results.append(self.get_data())
        return results

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
