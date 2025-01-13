const simulationInfo = [
  {
    path: "/rectangular-barrier",
    title: "Rectangular Barrier",
    description: "A Gaussian wave packet scattering off a rectangular barrier potential.",
    simulationType: "rectangular_barrier",
    parameters: [
      { name: "barrier_width", label: "Barrier Width", default: 5, type: "number", min: 0, max: 20, step: 1 },
      { name: "barrier_height", label: "Barrier Height", default: 0.3, type: "number", min: 0, max: 2, step: 0.1 },
      { name: "steps", label: "Steps", default: 300, type: "number", min: 100, max: 1000, step: 50 },
    ],
  },
  {
    path: "/parabolic-barrier",
    title: "Parabolic Barrier",
    description: "A Gaussian wave packet scattering off a parabolic barrier potential.",
    simulationType: "parabolic_barrier",
    parameters: [
      { name: "barrier_coefficient", label: "Barrier Coefficient", default: 0.0001, type: "number", min: -.001, max: 0.001, step: 0.0001 },
      { name: "steps", label: "Steps", default: 300, type: "number", min: 100, max: 1000, step: 50 },
    ],
  },
  {
    path: "/rectangular-well",
    title: "Rectangular Well",
    description: "A Gaussian wave packet scattering off a rectangular well potential.",
    simulationType: "rectangular_well",
    parameters: [
      { name: "well_width", label: "Well Width", default: 10, type: "number", min: 0, max: 20, step: 1 },
      { name: "well_depth", label: "Well Depth", default: -0.3, type: "number", min: -5, max: 5, step: 0.1 },
      { name: "steps", label: "Steps", default: 300, type: "number", min: 100, max: 1000, step: 50 },
    ],
  },
];

export default simulationInfo;
