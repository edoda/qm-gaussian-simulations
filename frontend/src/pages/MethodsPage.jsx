import React from "react";
import Navbar from "../components/Navbar";
import * as Collapsible from "@radix-ui/react-collapsible";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import { Container, Box, Text, Heading, Card, Section, Flex } from "@radix-ui/themes";

const Methods = () => {

  return (
    <Container>
      <Flex direction='column'
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          height: '100%',
          marginBottom: 10,
          marginLeft: 10,
          marginRight: 10,
        }}>
      <Section className="content">
        <Heading as='h2'>Methods</Heading>
        <Text as='p' size='3'>A detailed explanation of the mathematics behind this simulation.</Text>
      </Section>
      <Card className="EqnContent">
        <Flex direction={{ initial: 'column', md: 'row' }} style={{justifyContent: 'space-between'}}>
        <Box className="EqnSection">
          <Box className="Eqn">
            <Heading as='h3' size='5'>Hamiltonian operator</Heading>
            <Text as='p' size='3'>
              <Latex>{`\\( \\hat H = \\hat T + \\hat V = \\frac{\\mathbf{\\hat p \\cdot \\hat p}}{2m} + V(\\mathbf{r}, t) = -\\frac{\\hbar^2}{2m} \\nabla^2 + V(\\mathbf{r}, t) \\)`}</Latex>
            </Text>
          </Box>
          <Box className="Eqn">
            <Heading as='h3' size='5'>Time-dependent Schrödinger Equation</Heading>
            <Text as='p' size='3'>
              <Latex>{`\\( i \\hbar \\frac{\\partial}{\\partial t}\\Psi(\\mathbf{r},t) = \\hat H \\Psi(\\mathbf{r},t) \\)`}</Latex>
            </Text>
          </Box>
          <Box className="Eqn">
            <Heading as='h3' size='5'>General solution to time-dependent Schrödinger equation</Heading>
            <Text as='p' size='3'>
              <Latex>{`\\( \\Psi(x,t) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^{\\infty}\\Phi(k)\\Psi_{k}(x,t)dk \\)`}</Latex>
            </Text>
          </Box>
        </Box>
        <Box className="EqnSection">
          <Flex as='ul' direction='column'>
            <Text as='li' size='3' className="EqnBullet">
              <Latex>{`\\( \\hbar \\)`}</Latex> is Planck’s constant
            </Text>
            <Text as='li' size='3' className="EqnBullet">
              <Latex>{`\\( m \\)`}</Latex> is the mass of the particle
            </Text>
            <Text as='li' size='3' className="EqnBullet">
              <Latex>{`\\( V(\\mathbf{r}, t) \\)`}</Latex> is the potential energy
            </Text>
            <Text as='li' size='3' className="EqnBullet">
              <Latex>{`\\( \\Psi(\\mathbf{r},t) \\)`}</Latex> is a time-dependent wave function
            </Text>
            <Text as='li' size='3' className="EqnBullet">
              <Latex>{`\\( \\hat H \\)`}</Latex> is the Hamiltonian operator
            </Text>
            <Text as='li' size='3' className="EqnBullet">
              <Latex>{`\\( \\nabla^2 \\)`}</Latex> is the Laplacian operator
            </Text>
          </Flex>
        </Box>
        </Flex>
      </Card>
      <Section className="content">
        <Text size="3">
          In quantum mechanics, we use the time-dependent Schrödinger equation{" "}
          <Latex>{`$$ i \\hbar \\frac{\\partial}{\\partial t} \\Psi(\\mathbf{r},t) = \\hat H \\Psi(\\mathbf{r},t) $$`}</Latex>
          {" "}
          to analyze the time evolution of a wave function{" "}
          <Latex>{`\\( \\Psi(\\mathbf{r},t) \\)`}</Latex>.{" "}
          <Latex>{`\\(|\\Psi(\\mathbf{r},t)|^2\\)`}</Latex> is the probability density of the
          particle's position, and{" "}
          <Latex>{`\\( \\int_{a}^{b} |\\Psi(\\mathbf{r},t)|^2 dx\\)`}</Latex> is equal to the probability
          of observing a particle between <Latex>{`\\((a, b)\\)`}</Latex> at some time{" "}
          <Latex>{`\\(t\\)`}</Latex>; in other words, we can see how a quantum state of a particle
          should change in time in response to its environment and some applied potential. We also
          have a normalization condition{" "}
          <Latex>{`\\(\\int_{-\\infty}^{\\infty} |\\Psi(\\mathbf{r},t)|^2 dx = 1\\)`}</Latex> which
          tells us the particle is definitely *somewhere*.
        </Text>

        <Text size="3" style={{ marginTop: "1rem" }}>
          For the sake of simplicity, we will work in one spatial dimension (<Latex>{`\\(x\\)`}</Latex>),
          so
          <Latex>{`$$\\Psi(\\mathbf{r},t) \\implies \\Psi(x,t)$$`}</Latex>
          {" "} 
          <Latex>{`$$\\hat H = -\\frac{\\hbar^2}{2m} \\nabla^2 + V(\\mathbf{r}, t) \\implies \\hat H =  -\\frac{\\hbar^2}{2m}\\frac{d^2}{dx^2} + V(x,t),$$`}</Latex>
          and <Latex>{`\\( \\Psi(x,t) \\)`}</Latex>, our general solution to the time-dependent
          Schrödinger equation becomes the integral over the continuous variable <Latex>{`\\(k\\)`}</Latex> for each stationary state <Latex>{`\\(\\Psi_k\\)`}</Latex>:
          <Latex>{`$$ \\Psi(x,t) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^{\\infty}\\Phi(k)\\Psi_{k}(x,t) dk $$`}</Latex>{" "}
          where
          <Latex>{`$$ \\Psi_{k}(x,t) = e^{i(kx-\\frac{\\hbar k^2}{2m}t)} = e^{i(kx-\\frac{E_{k}}{\\hbar}t)} $$`}</Latex>{" "}
          represents a stationary state.
        </Text>

        <Text size="3" style={{ marginTop: "1rem" }}>
          So typically in quantum mechanics we have some initial condition <Latex>{`\\(\\Psi(x,0)\\)`}</Latex>{" "}
          and need to find <Latex>{`\\(\\Psi(x,t)\\)`}</Latex>. In these simulations, we will
          construct our initial condition to be a normalized (skipping normalization steps)
          wavefunction of a Gaussian wave packet, centered on <Latex>{`\\(x=\\mu\\)`}</Latex>:
          <Latex>{`$$\\Psi(x, 0)=\\frac{e^{i\\phi}}{(2\\pi\\sigma^2)^{1/4}} e^{-\\frac{(x-\\mu)^2}{4\\sigma^2}},$$`}</Latex>
          where
        </Text>

        <Flex as="ul" direction="column" gap="2" style={{ listStyleType: "disc", listStylePosition: "outside", marginLeft: "1.5rem", marginTop: "1rem" }}>
          <Box as="li">
            <Text as="p" size="3">
              <Latex>{`\\(\\phi\\)`}</Latex> represents some arbitary real phase-angle,
            </Text>
          </Box>
          <Box as="li">
            <Text as="p" size="3">
              <Latex>{`\\(\\mu\\)`}</Latex> represents the mean or central value of the distribution, which
              determines where the peak of the curve is located on the x-axis,
            </Text>
          </Box>
          <Box as="li">
            <Text as="p" size="3">
              <Latex>{`\\(\\sigma\\)`}</Latex> represents the standard deviation, which determines the
              spread or width of the curve, and
            </Text>
          </Box>
          <Box as="li">
            <Text as="p" size="3">
              <Latex>{`\\(\\phi\\)`}</Latex> is the phase of the exponential, and is proportional to the
              product of a wavevector <Latex>{`\\(k_0\\)`}</Latex> and the position <Latex>{`\\(x\\)`}</Latex>.
            </Text>
          </Box>
        </Flex>

        <Text size="3" style={{ marginTop: "1rem" }}>
          Now that we have our Gaussian wavefunction, we can construct the Hamiltonian
          <Latex>{`$$ H = -\\frac{\\hbar^{2}}{2m}\\nabla^{2} + V(x) $$`}</Latex>
          letting <Latex>{`\\(\\hbar\\) = 1`}</Latex> and <Latex>{`\\(m\\) = 1`}</Latex> for simplicity.
          Notice that we have a 1D Laplacian operator,
          <Latex>{`$$\\nabla^{2} \\equiv \\frac{\\partial^2 f}{\\partial x^2}$$`}</Latex>
          which will have to be discretized to solve the Schrodinger equation numerically.
        </Text>
      </Section>

      <Collapsible.Root className="CollapsibleRoot">
        <Collapsible.Trigger asChild>
          <Text size='5' style={{ cursor: "pointer" }} weight='bold'>
            Aside on Discretization and Types of Numerical Methods
          </Text>
        </Collapsible.Trigger>

        <Collapsible.Content style={{ marginTop: "1em"}}>
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
              <Latex>
                {String.raw`$$
                  \nabla^{2}f \approx \frac{f(i+1,j)-2f(i,j)+f(i-1,j)}{(\Delta x)^{2}}
                  + \frac{f(i,j+1)-2f(i,j)+f(i,j-1)}{(\Delta y)^{2}}
                $$`}
              </Latex>
              where:
              <ul>
                <li>
                  <Latex>{`\\( f(i,j) \\)`}</Latex> represents the value of the function
                   at grid point <Latex>{`\\( (i,j) \\)`}</Latex>
                </li>
                <li>
                  <Latex>{String.raw`\( \Delta x \)`}</Latex> and <Latex>{String.raw`\( \Delta y \)`}</Latex> are the grid spacings in the x and
                  y directions, respectively.
                </li>
              </ul>
            </Text>
            <Text>
              This discrete approximation replaces the Laplacian operator in the
              PDE with a system of equations, allowing us to update the function {" "}
              <Latex>{String.raw`\( f\ \)`}</Latex>at each grid point over time. Finite differences methods can
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

            <Heading as='h3' Text size='4'>Crank-Nicholson Approach</Heading>
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

      <Section className="content" style={{ marginTop: 0 }}>
        <Text size="3">
          In the case of our Schrodinger equation, we are working in one
          dimension and are applying the Laplacian operator to our wavefunctions,
          hence our spatial discretization formula for the Laplacian operator
          acting on a wavefunction is
          <Latex>{`$$\\nabla^{2}\\psi \\approx \\frac{\\psi_{i+1} - 2\\psi_{i} + \\psi_{i-1}}{\\Delta x^{2}}$$`}</Latex>
          Now we can time discretize the complete Schrodinger equation in time
          with respect to some numerical method. Continue...
        </Text>
      </Section>

      <Section className="content">
        <Text size="3">(add references/sources here)</Text>
      </Section>

      </Flex>
    </Container>
  );
};

export default Methods;
