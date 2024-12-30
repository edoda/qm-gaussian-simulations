import React from "react";
import { Box, Container, Flex, Heading, Text, Section } from "@radix-ui/themes";

const About = () => {
  return (
    <Container>
      <Section>
      <Flex direction={{ initial: 'column', md: 'row' }}
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          height: '100%',
          marginBottom: 10,
          marginLeft: 10,
          marginRight: 10,
          gap: 10,
        }}>
        <Box className="AboutContainerVariant">
          <Heading
            as="h2"
            size='6'
            weight='bold'
            >
              About
            </Heading>
          <Text as="p" size='3'>
            This website, developed for PHYS-495 (senior final project) at the
            University of Southern California, showcases interactive simulations created by Emilia Doda, a physics and computer science student. This website acts as an educational supplement to visually enrich the learning of undergraduate-level quantum mechanics, with a focus on illustrating the principles of quantum tunneling and Gaussian wave packets.
          </Text>
          <Heading
            as="h3"
            size='4'
            weight='bold'
            style={{paddingTop: '.5rem'}}
            >
              Relevant links:
            </Heading>
          <Flex as='ul' direction='column'>
            <Box as='li'>
              <Text>
                <a href="https://github.com/edoda" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </Text>
            </Box>
            <Box as='li'>
              <Text>
                <a href="https://www.linkedin.com/in/edoda/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box className="AboutContainerVariant">
          <Heading as="h3" size='4' weight='bold'>
            Languages and technologies used:
          </Heading>
          <Flex direction='column' gap={5} as="ul">
              <Text as='li'><strong>React</strong>: Used for creating the frontend. More specifically, RadixUI was used for styling.</Text>
              <Text as='li'><strong>Python</strong>: Used for creating the physics simulations.</Text>
              <Text as='li'><strong>Vercel</strong>: A cloud platform used for deploying this static web project.</Text>
              <Text as='li'><strong>Flask</strong>: A Python web framework that allows users to run Python in various environments.</Text>
              <Text as='li'><strong>Plotly</strong>: An open-source Python visualization library/module for creating interactive graphs and animations.</Text>
              <Text as='li'><strong>Pyodide</strong>: A Python distribution for the browser and Node.js based on WebAssembly. Allows Python to run in web browser.</Text>
              <Text as='li'><strong>NumPy</strong>: A python library used for general numerical calculations.</Text>
              <Text as='li'><strong>SciPy</strong>: A python library used for specific scientific calculations.</Text>
          </Flex>
        </Box>
      </Flex>
      </Section>
    </Container>
  );
};

export default About;
