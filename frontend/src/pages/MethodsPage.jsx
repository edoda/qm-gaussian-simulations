import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Container, Box, Text, Heading, Flex, Separator } from "@radix-ui/themes";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { MathJax } from 'better-react-mathjax';

const Methods = () => {

  return (
    <Container className="InfoContainer">
      <Flex gap='4' direction='column'>
        <Box>
          <Heading as="h2">Methods</Heading>
          <Text as='p' size="3">A detailed explanation of the mathematics behind this simulation.</Text>
        </Box>
        <Separator orientation="horizontal" size="4" />
      </Flex>
      <Flex direction='column' py='6' gap='5'>
        <Box variant='surface' className="EqnContent">
          <Flex direction={{ initial: 'column', md: 'row' }} gap='4' style={{justifyContent: 'space-between'}}>
          <Flex direction='column' gap='3' className="EqnSection">
            <Box className="Eqn">
              <Heading as='h3' size='4'>Hamiltonian operator</Heading>
              <Text as='p' size='3'>
                <MathJax>{`$$ \\hat H = \\hat T + \\hat V = \\frac{\\mathbf{\\hat p \\cdot \\hat p}}{2m} + V(\\mathbf{r}, t) = -\\frac{\\hbar^2}{2m} \\nabla^2 + V(\\mathbf{r}, t) $$`}</MathJax>
              </Text>
            </Box>
            <Box className="Eqn">
              <Heading as='h3' size='4'>Time-dependent Schrödinger Equation</Heading>
              <Text as='p' size='3'>
                <MathJax>{`$$ i \\hbar \\frac{\\partial}{\\partial t}\\Psi(\\mathbf{r},t) = \\hat H \\Psi(\\mathbf{r},t) $$`}</MathJax>
              </Text>
            </Box>
            <Box className="Eqn">
              <Heading as='h3' size='4'>General solution to time-dependent Schrödinger equation</Heading>
              <Text as='p' size='3'>
                <MathJax>{`$$ \\Psi(x,t) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^{\\infty}\\Phi(k)\\Psi_{k}(x,t)dk $$`}</MathJax>
              </Text>
            </Box>
          </Flex>
          <Box className="EqnSection">
            <Flex gap='1' direction='column' asChild>
            <ul>
              <li>
                <MathJax inline>{`\\( \\hbar \\)`}</MathJax> is Planck’s constant
              </li>
              <li>
                <MathJax inline>{`\\( m \\)`}</MathJax> is the mass of the particle
              </li>
              <li>
                <MathJax inline>{`\\( V(\\mathbf{r}, t) \\)`}</MathJax> is the potential energy
              </li>
              <li>
                <MathJax inline>{`\\( \\Psi(\\mathbf{r},t) \\)`}</MathJax> is a time-dependent wave function
              </li>
              <li>
                <MathJax inline>{`\\( \\hat H \\)`}</MathJax> is the Hamiltonian operator
              </li>
              <li>
                <MathJax inline>{`\\( \\nabla^2 \\)`}</MathJax> is the Laplacian operator
              </li>
              </ul>
            </Flex>
          </Box>
          </Flex>
        </Box>
        <Flex direction='column' gap='3'>
        <Text size="3">
          In quantum mechanics, we use the time-dependent Schrödinger equation{" "}
          <MathJax>{`$$ i \\hbar \\frac{\\partial}{\\partial t} \\Psi(\\mathbf{r},t) = \\hat H \\Psi(\\mathbf{r},t) $$`}</MathJax>
          {" "}
          to analyze the time evolution of a wave function{" "}
          <MathJax inline>{`\\( \\Psi(\\mathbf{r},t) \\)`}</MathJax>.{" "}
          <MathJax inline>{`\\(|\\Psi(\\mathbf{r},t)|^2\\)`}</MathJax> is the probability density of the
          particle's position, and{" "}
          <MathJax inline>{`\\( \\int_{a}^{b} |\\Psi(\\mathbf{r},t)|^2 dx\\)`}</MathJax> is equal to the probability
          of observing a particle between <MathJax inline>{`\\((a, b)\\)`}</MathJax> at some time{" "}
          <MathJax inline>{`\\(t\\)`}</MathJax>; in other words, we can see how a quantum state of a particle
          should change in time in response to its environment and some applied potential. We also
          have a normalization condition{" "}
          <MathJax inline>{`\\(\\int_{-\\infty}^{\\infty} |\\Psi(\\mathbf{r},t)|^2 dx = 1\\)`}</MathJax> which
          tells us the particle is definitely *somewhere*.
        </Text>

        <Text size="3">
          For the sake of simplicity, we will work in one spatial dimension (<MathJax inline>{`\\(x\\)`}</MathJax>),
          so
          <MathJax>{`$$ \\Psi(\\mathbf{r},t) \\implies \\Psi(x,t) $$`}</MathJax>
          {" "} 
          <MathJax>{`$$\\hat H = -\\frac{\\hbar^2}{2m} \\nabla^2 + V(\\mathbf{r}, t) \\implies \\hat H =  -\\frac{\\hbar^2}{2m}\\frac{d^2}{dx^2} + V(x,t),$$`}</MathJax>
          and <MathJax inline>{`\\( \\Psi(x,t) \\)`}</MathJax>, our general solution to the time-dependent
          Schrödinger equation becomes the integral over the continuous variable <MathJax inline>{`\\(k\\)`}</MathJax> for each stationary state <MathJax>{`\\(\\Psi_k\\)`}</MathJax>:
          <MathJax>{`$$ \\Psi(x,t) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^{\\infty}\\Phi(k)\\Psi_{k}(x,t) dk $$`}</MathJax>{" "}
          where
          <MathJax>{`$$ \\Psi_{k}(x,t) = e^{i(kx-\\frac{\\hbar k^2}{2m}t)} = e^{i(kx-\\frac{E_{k}}{\\hbar}t)} $$`}</MathJax>{" "}
          represents a stationary state.
        </Text>

        <Text size="3">
          So typically in quantum mechanics we have some initial condition <MathJax inline>{`\\(\\Psi(x,0)\\)`}</MathJax>{" "}
          and need to find <MathJax inline>{`\\(\\Psi(x,t)\\)`}</MathJax>. In these simulations, we will
          construct our initial condition to be a normalized (skipping normalization steps)
          wavefunction of a Gaussian wave packet, centered on <MathJax inline>{`\\(x=\\mu\\)`}</MathJax>:
          <MathJax>{`$$\\Psi(x, 0)=\\frac{e^{i\\phi}}{(2\\pi\\sigma^2)^{1/4}} e^{-\\frac{(x-\\mu)^2}{4\\sigma^2}},$$`}</MathJax>
          where
        </Text>

        <Flex direction="column" gap="1" asChild>
        <ul>
          <li>
              <MathJax inline>{`\\(\\phi\\)`}</MathJax> represents some arbitary real phase-angle,
          </li>
          <li>
              <MathJax inline>{`\\(\\mu\\)`}</MathJax> represents the mean or central value of the distribution, which
              determines where the peak of the curve is located on the x-axis,
          </li>
          <li>
              <MathJax inline>{`\\(\\sigma\\)`}</MathJax> represents the standard deviation, which determines the
              spread or width of the curve, and
          </li>
          <li>
              <MathJax inline>{`\\(\\phi\\)`}</MathJax> is the phase of the exponential, and is proportional to the
              product of a wavevector <MathJax inline>{`\\(k_0\\)`}</MathJax> and the position <MathJax inline>{`\\(x\\)`}</MathJax>.
          </li>
          </ul>
        </Flex>

        <Text size="3">
          Now that we have our Gaussian wavefunction, we can construct the Hamiltonian
          <MathJax>{`$$ H = -\\frac{\\hbar^{2}}{2m}\\nabla^{2} + V(x) $$`}</MathJax>
          letting <MathJax inline>{`\\(\\hbar\\) = 1`}</MathJax> and <MathJax inline>{`\\(m\\) = 1`}</MathJax> for simplicity.
          Notice that we have a 1D Laplacian operator,
          <MathJax>{`$$\\nabla^{2} \\equiv \\frac{\\partial^2 f}{\\partial x^2}$$`}</MathJax>
          which will have to be discretized to solve the Schrodinger equation numerically.
        </Text>
        </Flex>

        <Collapsible.Root className="CollapsibleRoot" >
          <Collapsible.Trigger asChild>
            <div>
            <Text size='5' weight='bold'>
              Aside on Discretization and Types of Numerical Methods  <CaretDownIcon className="CaretDown" aria-hidden />
            </Text>
            </div>
          </Collapsible.Trigger>

          <Collapsible.Content className='CollapsibleContent'>
              <Text size='3'>
                To numerically solve our PDE, we have to use a method that
                approximates the spatial derivatives in the Laplacian. There are
                several ways of doing this, of varying complexity. We will focus on
                two specific approaches.
              </Text>
              <br /><br />
              <Heading as='h3' size='4'>Finite Differences Approach</Heading>
              <Text size='3'>
                The finite differences approach is one commonly used method for
                discretizing and solving PDEs. Typically, this is visualized on a
                grid or mesh. You can imagine dividing the spatial domain into a
                grid, where each grid point represents a discrete location. (add
                figure)
              </Text>
              <Text size='3'>
                To discretize the Laplacian — for example, in two dimensions, we can
                use a formula that approximates the second derivatives with
                differences in function values at neighboring grid points:
                <MathJax>
                  {`$$
                    \nabla^{2}f \approx \frac{f(i+1,j)-2f(i,j)+f(i-1,j)}{(\Delta x)^{2}}
                    + \frac{f(i,j+1)-2f(i,j)+f(i,j-1)}{(\Delta y)^{2}}
                  $$`}
                </MathJax>
                where:
                <ul>
                  <li>
                    <MathJax inline>{`\\( f(i,j) \\)`}</MathJax> represents the value of the function
                    at grid point <MathJax inline>{`\\( (i,j) \\)`}</MathJax>
                  </li>
                  <li>
                    <MathJax inline>{`\( \Delta x \)`}</MathJax> and <MathJax inline>{`\( \Delta y \)`}</MathJax> are the grid spacings in the x and
                    y directions, respectively.
                  </li>
                </ul>
              </Text>
              <Text>
                This discrete approximation replaces the Laplacian operator in the
                PDE with a system of equations, allowing us to update the function {" "}
                <MathJax inline>{`\( f\ \)`}</MathJax>at each grid point over time. Finite differences methods can
                be classified into explicit and implicit schemes, each with its own
                advantages and limitations. They are particularly suitable for
                problems with regular geometries and straightforward boundary
                conditions.
              </Text>
              <ul>
                <li>Pros: Straightforward, easy to implement.</li>
                <li>
                  Cons: Not very accurate, can be numerically unstable for certain
                  time/space steps, and can be awkward for complex boundary
                  conditions.
                </li>
              </ul>

              <Heading as='h3' size='4'>Crank-Nicholson Approach</Heading>
              <Text size='3'>
                The Crank-Nicholson method is another widely used approach for
                solving PDEs, including the Schrödinger equation. It is a
                semi-implicit method that combines both implicit and explicit
                time-stepping schemes, offering a balance between stability and
                accuracy. Crank-Nicholson is known for its:
              </Text>
              <ul>
                <li>Pros: High stability, high accuracy, and better for more complex systems.</li>
                <li>Cons: More involved implementation and formulas.</li>
              </ul>
              <Text>
                When solving time-dependent problems with Crank-Nicholson, you can
                achieve accurate and stable results, especially for systems with
                varying potentials or wavefunctions.
              </Text>
          </Collapsible.Content>
        </Collapsible.Root>

        <Text size="3">
          In the case of our Schrodinger equation, we are working in one
          dimension and are applying the Laplacian operator to our wavefunctions,
          hence our spatial discretization formula for the Laplacian operator
          acting on a wavefunction is
          <MathJax>{`$$ \\nabla^{2}\\psi \\approx \\frac{\\psi_{i+1} - 2\\psi_{i} + \\psi_{i-1}}{\\Delta x^{2}} $$`}</MathJax>
          Now we can time discretize the complete Schrodinger equation in time
          with respect to some numerical method. Continue...
        </Text>

        <Text size="3">(add references/sources here)</Text>
      </Flex>
    </Container>
  );
};

export default Methods;
