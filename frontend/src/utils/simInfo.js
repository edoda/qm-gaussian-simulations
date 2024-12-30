const simulationInfo = [
  {
    path: "/rectangular-barrier",
    title: "Rectangular Barrier Simulation",
    description:
      "This simulation features a gaussian pulse/wavepacket propagating through time in a vacuum and scattering off of a rectangular barrier potential.",
    simulationType: "rectangular_barrier",
    parameters: {
      barrier_width: 5,
      barrier_height: 1,
      steps: 100,
    },
  },
  {
    path: "/parabolic-barrier",
    title: "Parabolic Barrier Simulation",
    description:
      "This simulation features a gaussian pulse/wavepacket propagating through time in a vacuum and scattering off of a parabolic barrier potential.",
    simulationType: "parabolic_barrier",
    parameters: {
      barrier_coefficient: 0.0001,
      steps: 100,
    },
  },
  {
    path: "/rectangular-well",
    title: "Rectangular Well Simulation",
    description:
      "This simulation features a gaussian pulse/wavepacket propagating through time in a vacuum and scattering off of a rectangular well potential.",
    simulationType: "rectangular_well",
    parameters: {
      well_width: 10,
      well_depth: -1,
      steps: 100,
    },
  },
];

export default simulationInfo;
