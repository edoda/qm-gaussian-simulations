import React from "react";
import Navbar from "../components/Navbar";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import {
  Box,
  Heading,
  Text,
  Link as RadixLink,
  Flex,
  Container,
  Section,
  Grid,
} from "@radix-ui/themes";

const Home = () => {
  return (
    <Container>
      <Section size={1}>
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

        <Flex
          display='flex'
          direction={{ initial: 'column', md: 'row' }}
          style={{
            marginLeft: 10,
            marginRight: 10,
            gap: 10,
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <Box className="AboutContainer">
            <Heading
              as="h3"
              size='5'
              weight='bold'
            >
              Wave Packets in Brief
            </Heading>
            <Flex direction="column" gap="1">
              <Box><Text
                as="p"
                size='3'
                style={{ fontSize: "16px", marginBottom: "1em" }}
              >
                A wave packet is a burst of waves that can be superimposed via
                constructive interference from a potentially infinite set of
                individual sinusoidal waves, each with differing phases and
                amplitudes (each corresponding to specific energy or momentum
                state).{" "}
                <RadixLink
                  href="https://en.wikipedia.org/wiki/Wave_packet"
                  target="_blank"
                >
                  [Wikipedia]
                </RadixLink>
              </Text></Box>
              
              <Box>
                <Text
                as="p"
                size='3'
                style={{ fontSize: "16px", marginBottom: "1em" }}
                >
                Wave packets are a mathematical construct that are useful across
                many fields, including optics, acoustics, quantum mechanics, and
                signal processing.
              </Text>
            </Box>
            </Flex>
          </Box>

          <Box className="AboutContainer">
            <Heading
              as="h3"
              size='5'
              weight='bold'
            >
              Characteristics of Wave Packets
            </Heading>
            <Flex as='ul' direction='column' gap='1' style={{ margin: 0 }}>
              <Box as='li'>
                <Text as="p" size='3'>
                  <strong>Localization:</strong> Wave packets are localized in
                  both position and momentum space.
                </Text>
              </Box>
              <Box as='li' >
                <Text as="p" size='3'>
                  <strong>Dispersion:</strong>  Over time, a wave packet will 
                  typically spread out due to the uncertainty principle. This 
                  dispersion leads to a gradual increase in the uncertainty in 
                  both position and momentum.
                </Text>
              </Box>
              <Box as='li'>
                <Text as="p" size='3'>
                  <strong>Group Velocity:</strong> The group velocity of a wave
                    packet represents the velocity at which the maximum amplitude
                    of the wave packet moves through space. This velocity is
                    associated with the particle's classical velocity.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>

      <Section className="InfoSection">
        <Heading as="h2" size="5">
          What is a Gaussian wave packet, and why do we use them?
        </Heading>
        <Flex as='ul' direction='column'>
          <Text size="3" style={{ marginTop: "1rem" }}>
            A Gaussian is a special function of the form:
            <Latex>
              {String.raw`$$ 
                g(x) = e^{-x^2} 
                \quad \text{or} \quad
                g(x) = a e^{-\frac{(x-b)^2}{4c^2}}
              $$`}
            </Latex>
            where <Latex>{`\\( a \\)`}, {`\\( b \\)`}, {`\\( c \\neq 0 \\)`}</Latex>, and {" "}
            <Latex>{`\\( a \\)`}</Latex>  is the height of the curve's peak, <Latex>{`\\( b \\)`}</Latex> is the position of the center of the peak,{" "}
            <Latex>{`\\( c \\)`}</Latex> (the standard deviation) controls the width of the "bell." {" "}
            <RadixLink
              href="https://en.wikipedia.org/wiki/Wave_packet"
              target="_blank"
            >
              [Wikipedia]
            </RadixLink>
          </Text>

          <Text as="p" size='3'>
              Gaussian wave packets are described by wave functions{" "}
              <Latex>{`\\( \\Psi(\\mathbf{r}, t) \\)`}</Latex>, are localized in
              both position and momentum, and are used to describe QM scenarios
              where particles do not have well-defined positions or momenta.
          </Text>
          <Flex direction={'column'}>
          <Text as='li' size='3' style={{display: 'list-item', listStyle: 'disc', listStylePosition: "inside",}}>
              are mathematically basic and simple to work with,
          </Text>
          <Text as='li' size='3' style={{display: 'list-item', listStyle: 'disc', listStylePosition: "inside",}}>
            are useful for approximating more complex function, and are consistent with many experiemental observations,
          </Text>
          <Text as='li' size='3' style={{display: 'list-item', listStyle: 'disc', listStylePosition: "inside",}}>
          yield bell-shaped probability distributions, and
          </Text>
          <Text as='li' size='3' style={{ display: 'list-item', listStyle: 'disc', listStylePosition: "inside" }}>
            remain Gaussian functions when a Fourier transform is applied (we'll talk about this in <RadixLink asChild><a href="/methods">methods</a></RadixLink>).
          </Text>
          </Flex>
        </Flex>
      </Section>
    </Container>
  );
};

export default Home;
