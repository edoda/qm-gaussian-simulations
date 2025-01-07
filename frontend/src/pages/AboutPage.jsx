import React from "react";
import { Box, Container, Flex, Heading, Text, Section, Link as RadixLink, Separator, Strong, } from "@radix-ui/themes";

const About = () => {
  return (
    <Container className="InfoContainer">
      <Flex direction={{ initial: 'column', md: 'row' }} gap='4'>
        <Box className="AboutContainerVariant">
          <Section py='3'>
          <Heading
            as="h2"
            size='6'
            weight='bold'
            >
              About
            </Heading>
          <Text as="p" size='3'>
            This website, originally developed for PHYS-495 (senior final project) at the
            University of Southern California, showcases interactive simulations created by Emilia Doda, a physics and computer science student. This website is educational tool to visually supplement the learning of undergraduate-level quantum mechanics, with a focus on illustrating the principles of quantum tunneling and Gaussian wave packets.
          </Text>
          </Section>
          <Separator orientation="horizontal" size="4" />
          <Section py='3'>
            <Heading as="h3" size='4' weight='bold'>Relevant links:</Heading>
            <Flex direction='column' asChild>
              <ul>
              <li>
                <Text>
                  <RadixLink href="https://github.com/edoda" target="_blank" rel="noopener noreferrer">
                    Github
                  </RadixLink>
                </Text>
              </li>
              <li>
                <Text>
                  <RadixLink href="https://www.linkedin.com/in/edoda/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </RadixLink>
                </Text>
              </li>
              </ul>
            </Flex>
          </Section>
        </Box>
        <Box className="AboutContainerVariant">
          <Section py='3'>
            <Heading as="h3" size='4' weight='bold'>Languages and technologies used</Heading>
          </Section>
          <Separator orientation="horizontal" size="4" />
          <Section py='3'>
            <Flex direction='column' gap='1'>
                <Text as='p'><Strong>React</Strong>: Used for creating the frontend. More specifically, RadixUI was used for styling.</Text>
                <Text as='p'><Strong>Python</Strong>: Used for creating the physics simulations.</Text>
                <Text as='p'><Strong>Vercel</Strong>: A cloud platform used for deploying this static web project.</Text>
                <Text as='p'><Strong>Flask</Strong>: A Python web framework that allows users to run Python in various environments.</Text>
                <Text as='p'><Strong>Plotly</Strong>: An open-source Python visualization library/module for creating interactive graphs and animations.</Text>
                <Text as='p'><Strong>Pyodide</Strong>: A Python distribution for the browser and Node.js based on WebAssembly. Allows Python to run in web browser.</Text>
                <Text as='p'><Strong>NumPy</Strong>: A python library used for general numerical calculations.</Text>
                <Text><Strong>SciPy</Strong>: A python library used for specific scientific calculations.</Text>
            </Flex>
          </Section>
        </Box>
      </Flex>
    </Container>
  );
};

export default About;
