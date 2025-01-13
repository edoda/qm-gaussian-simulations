import React from "react";
import {
  Box,
  Heading,
  Text,
  Link as RadixLink,
  Flex,
  Container,
  Section,
  Separator,
  Grid,
  HoverCard,
  Strong,
} from "@radix-ui/themes";
import { MathJax } from "better-react-mathjax";

const Home = () => {
  return (
    
    <Container className='InfoContainer'>
      <Section py='6'>
        <Heading
          size="8"
          align='center'
          trim='both'
          weight='bold'
          wrap='wrap'
        >
          Quantum Gaussian Wave Packet Propagation Simulations
        </Heading>
      </Section>

      <Grid
        className="AboutContainer"
        columns={{ initial: "1fr", md: "1fr 1fr" }}
      >
        <Box className="GridSection">
          <Heading as="h3" size="5" weight="bold">
            Wave Packets in Brief
          </Heading>
          <Separator orientation="horizontal" size="4" />
          <Section py="3">
            <Flex direction="column" gap="1">
              <Text as="p" size="3" style={{ fontSize: "16px", marginBottom: "1em" }}>
                A wave packet is a burst of waves that can be superimposed via
                constructive interference from a potentially infinite set of
                individual sinusoidal waves, each with differing phases and
                amplitudes (each corresponding to specific energy or momentum
                state).{" "}
                <RadixLink href="https://en.wikipedia.org/wiki/Wave_packet" target="_blank">
                  [Wikipedia]
                </RadixLink>
              </Text>
              <Text as="p" size="3" style={{ fontSize: "16px", marginBottom: "1em" }}>
                Wave packets are a mathematical construct that are useful across
                many fields, including optics, acoustics, quantum mechanics, and
                signal processing.
              </Text>
            </Flex>
          </Section>
        </Box>
        <Box className="GridSection">
          <Heading as="h3" size="5" weight="bold">
            Characteristics of Wave Packets
          </Heading>
          <Separator orientation="horizontal" size="4" />
          <Section py="3">
            <Flex direction="column" gap="1" asChild>
              <ul>
              <li>
                <Text as="p" size="3">
                  <Strong>Localization:</Strong> Wave packets are localized in
                  both position and momentum space.
                </Text>
              </li>
              <li>
                <Text as="p" size="3">
                  <Strong>Dispersion:</Strong> Over time, a wave packet will 
                  typically spread out due to the uncertainty principle. This 
                  dispersion leads to a gradual increase in the uncertainty in 
                  both position and momentum.
                </Text>
              </li>
              <li>
                <Text as="p" size="3">
                  <Strong>Group Velocity:</Strong> The group velocity of a wave
                  packet represents the velocity at which the maximum amplitude
                  of the wave packet moves through space. This velocity is
                  associated with the particle's classical velocity.
                </Text>
              </li>
              </ul>
            </Flex>
          </Section>
        </Box>
      </Grid>

      <Section py='6'>
        <Heading as="h2" size="6" align='center'>
          What is a Gaussian wave packet, and why do we use them?
        </Heading>
        <Flex direction='column'>
          <Text as='p' size="3">
            A Gaussian is a special function of the form:
            <MathJax>
              {`$$
                g(x) = e^{-x^2} \\quad \\text{or} \\quad g(x) = a e^{-\\frac{(x-b)^2}{4c^2}}
              $$`}
            </MathJax>
            where <MathJax inline>{`\\( a \\)`}, {`\\( b \\)`}, {`\\( c \\neq 0 \\)`}</MathJax>, and {" "}
            <MathJax inline>{`\\( a \\)`}</MathJax>  is the height of the curve's peak, <MathJax inline>{`\\( b \\)`}</MathJax> is the position of the center of the peak,{" "}
            <MathJax inline>{`\\( c \\)`}</MathJax> (the standard deviation) controls the width of the "bell."
          </Text>
          <br />
          <Text as="p" size='3'>
              Gaussian wave packets are described by {" "}
              <HoverCard.Root>
                <HoverCard.Trigger>
                  <RadixLink href="https://en.wikipedia.org/wiki/Wave_function" target="_blank">wave functions</RadixLink>
                </HoverCard.Trigger>
                <HoverCard.Content size="2" maxWidth="280px">
                  <Text as="div" size="2" trim="both">
                    <Strong>Wave functions/wavefunctions</Strong> are a mathematical 
                    description of the quantum state of a particle, like an electron. 
                    In quantum mechanics, particles don't have precise positions and 
                    velocities like they do in classical physics. Instead, a 
                    wavefunction tells us the probabilities of where a particle might
                    be found. <RadixLink href="https://en.wikipedia.org/wiki/Wave_function" target="_blank">[Wikipedia]</RadixLink>

                  </Text>
                </HoverCard.Content>
              </HoverCard.Root> {" "}
              
              <MathJax inline>{`\\( \\Psi(\\mathbf{r}, t) \\)`}</MathJax>, are localized in
              both position and momentum, and are used to describe QM scenarios
              where particles do not have well-defined positions or momenta. We 
              also use Gaussian wave packets because they:
          </Text>
          <Flex direction={'column'} asChild>
            <ul>
              <li>
                  are mathematically basic and simple to work with,
              </li>
              <li>
                are useful for approximating more complex function, and are consistent with many experiemental observations,
              </li>
              <li>
              yield bell-shaped probability distributions, and
              </li>
              <li>
                remain Gaussian functions when a Fourier transform is applied (we'll talk about this in <RadixLink asChild><a href="/methods">methods</a></RadixLink>).
              </li>
            </ul>
          </Flex>
        </Flex>
      </Section>
    </Container>
  );
};

export default Home;
