import React, { useEffect, useRef, useState } from "react";
// import Plotly from 'plotly.js-basic-dist-min';
import {
  Button,
  Container,
  Heading,
  Section,
  Text,
  Box,
  Flex,
  Spinner,
  Callout,
  Badge,
  Separator,
} from "@radix-ui/themes";
import { CaretDownIcon, InfoCircledIcon, PauseIcon, PlayIcon, ResetIcon } from "@radix-ui/react-icons";
import * as Collapsible from "@radix-ui/react-collapsible";
import * as Slider from "@radix-ui/react-slider";
import { MathJax } from 'better-react-mathjax';


const SimulationPage = ({ title, description, simulationType, defaultParameters }) => {
  const simRef = useRef(null);
  const [simulationData, setSimulationData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [parameters, setParameters] = useState(defaultParameters);
  const [currentValues, setCurrentValues] = useState(
    defaultParameters.reduce((acc, param) => {
      acc[param.name] = param.default;
      return acc;
    }, {})
  );
  const [result, setResult] = useState(null);
  const intervalRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const stepRef = useRef(0);

  const handleParameterChange = (key, value) => {
    setParameters((prev) => ({ ...prev, [key]: value }));
    setCurrentValues((prev) => ({ ...prev, [key]: value }));
  };

  const fetchSimulationData = async () => {
    setIsLoading(true);
    let data = null;
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_BASEURL}/api/simulate`, { //${import.meta.env.VITE_BACKEND_BASEURL}
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ simulation_type: simulationType, parameters }),
      });
      if (!response.ok) {
        throw new Error(`API call failed: ${response.statusText}`);
      }
      data = await response.json();
      setSimulationData(data);
    } catch (error) {
      console.error("Error fetching simulation data:", error);
    } finally {
      setResult(data ? data.result : null);
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    if (simulationData) {
      const initialFrame = simulationData[0];
      const traces = [
        {
          x: initialFrame.x,
          y: initialFrame.psi_real,
          type: "scatter",
          mode: "lines",
          name: "Real Part",
        },
        {
          x: initialFrame.x,
          y: initialFrame.psi_imag,
          type: "scatter",
          mode: "lines",
          name: "Imaginary Part",
        },
        {
          x: initialFrame.x,
          y: initialFrame.potential,
          type: "scatter",
          mode: "lines",
          name: "Potential",
        },
        {
          x: initialFrame.x,
          y: initialFrame.probability,
          type: "scatter",
          mode: "lines",
          name: "|Psi|^2",
          visible: "legendonly",
        },
      ];
      Plotly.newPlot("plotly-div", traces, {
        title: `${title}`,
        xaxis: { title: "X", range: [-150, 150] },
        yaxis: { title: "Amplitude", range: [-0.5, 0.5] },
      }, {scrollZoom: true});
      simRef.current?.scrollIntoView({ behavior: 'smooth' });
    } 
  }, [simulationData]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const pauseAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsPaused(true);
    }
  };

  const startAnimation = () => {
    if (isPaused) {
      setIsPaused(false);
    } else {
      stepRef.current = 0;
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      const step = stepRef.current;

      if (simulationData && step < simulationData.length) {
        const frame = simulationData[step];
        stepRef.current = step + 1;

        Plotly.update("plotly-div", {
          y: [
            frame.psi_real,
            frame.psi_imag,
            frame.potential,
            frame.probability,
          ],
        });
      } else {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }, 50);
  };

  const resetAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    stepRef.current = 0;
    setIsPaused(false);
    if (simulationData) {
      const initialFrame = simulationData[0];
      Plotly.update("plotly-div", {
        y: [
          initialFrame.psi_real,
          initialFrame.psi_imag,
          initialFrame.potential,
          initialFrame.probability,
        ],
      });
    }
  };
  

  return (
    <Flex
    direction="column"
    style={{
      height: "100%",
      marginBottom: 10,
    }}
  >
    <Container className="InfoContainer">
      <Flex gap='4' direction='column'>
        <Box>
          <Heading as="h2">{title} Simulation</Heading>
          <Text size="3">{description}</Text>
        </Box>
        <Separator orientation="horizontal" size="4" />
        <Text size="3">
          The wave function <MathJax inline>{'\\(\\Psi(x, 0)\\)'}</MathJax> describes the
          state of a quantum particle at initial time <MathJax inline>{'\\(t=0\\)'}</MathJax>. In this simulation, the wave function is
          given by:
        </Text>
        <MathJax>
        {`$$
            \\Psi(x, 0) = \\frac{e^{i\\phi}}{(2\\pi\\sigma^2)^{1/4}} e^{-\\frac{(x-\\mu)^2}{4\\sigma^2}}
          $$`}
        </MathJax>
        <Text size="3">
          where <MathJax inline>{'\\(\\phi\\)'}</MathJax> represents some arbitrary real
          phase-angle. <MathJax inline>{'\\(\\sigma\\)'}</MathJax> represents the standard deviation,
          which determines the spread or width of the curve. <MathJax inline>{'\\(\\mu\\)'}</MathJax> represents the mean or the central position of
          the wave packet, indicating where the wave packet is centered along
          the x-axis at <MathJax inline>{'\\(t=0\\)'}</MathJax>. Lastly, the exponential term is the Gaussian that shapes the
          amplitude of the wave packet, ensuring it is normally distributed
          around the mean <MathJax inline>{'\\(\\mu\\)'}</MathJax>.
        </Text>
      </Flex>

      <Section py='6'>
        <Container>
          <Collapsible.Root defaultOpen className="CollapsibleRoot">
            <Collapsible.Trigger asChild>
              <Text size='3' style={{ cursor: "pointer" }} weight='bold'>
                {title} Parameters <CaretDownIcon className="CaretDown" aria-hidden />
              </Text>
            </Collapsible.Trigger>
            <Collapsible.Content className="CollapsibleContent" style={{ marginTop: "1em", marginBottom: '1em' }}>
              <Section p='0' style={{ paddingBottom: '1em' }}>
                <Callout.Root color="gold">
                  <Callout.Icon>
                    <InfoCircledIcon />
                  </Callout.Icon>
                  <Callout.Text>
                    This animation is best viewed on desktop. You may experience some
                    performance issues on older mobile devices.
                  </Callout.Text>
                </Callout.Root>
              </Section>
              <Flex direction='column' gap='5'>
                <Flex gap='1em' className="ParameterFlex" width={{ initial: 'auto', sm: 'auto', md: 'auto' }}>
                  {defaultParameters.map((param) => (
                    <Box key={param.name} width={{ initial: '100%', sm: 'auto', md: 'auto' }} style={{ alignContent: 'center' }}>
                      <Text size="3" as="p" align='left' style={{ paddingBottom: '1em' }}>
                        {param.label}:
                      </Text>
                      <Slider.Root
                        size='3'
                        variant='surface'
                        className="SliderRoot"
                        onValueChange={(value) => handleParameterChange(param.name, value[0] || param.default)}
                        defaultValue={[param.default]}
                        min={param.min}
                        max={param.max}
                        step={param.step}
                      >
                        <Slider.Track className="SliderTrack">
                          <Slider.Range className="SliderRange" />
                        </Slider.Track>
                        <Slider.Thumb className="SliderThumb" aria-label={param.label} />
                      </Slider.Root>
                      <Flex direction="row" gap='2' style={{ width: '100%', marginTop: 5 }}>
                        <Badge variant='soft' size='2'>
                          Min: {param.min}
                        </Badge>
                        <Badge variant="soft" size='2'>
                          Max: {param.max}
                        </Badge>
                        <Badge variant="soft" size='2'>
                          Current: {currentValues[param.name]}
                        </Badge>
                      </Flex>
                    </Box>
                  ))}
                </Flex>
                <Flex style={{ flexWrap: 'wrap' }} className="ButtonContainer">
                  <Button
                    size="3"
                    width='100%'
                    variant="solid"
                    className="CustomButton"
                    onClick={fetchSimulationData}
                    disabled={isLoading || simulationData}
                  >
                    {isLoading ? (
                      <Flex align="center" gap="2">
                        <Spinner />
                        {simulationData ? 'Simulation Loaded' : 'Running...'}
                      </Flex>
                    ) : simulationData ? (
                      'Simulation Loaded'
                    ) : (
                      'Run Simulation'
                    )}
                  </Button>
                  <Button
                    variant="solid"
                    width='100%'
                    size="3"
                    className="CustomButton"
                    onClick={startAnimation}
                    disabled={!simulationData || isLoading}
                  >
                    <PlayIcon /> Start Animation
                  </Button>
                  <Button
                    variant="solid"
                    width='100%'
                    size="3"
                    className="CustomButton"
                    onClick={pauseAnimation}
                    disabled={!simulationData || isLoading}
                  >
                    <PauseIcon /> Pause Animation
                  </Button>
                  <Button
                    variant="solid"
                    width="100%"
                    size="3"
                    className="CustomButton"
                    onClick={resetAnimation}
                    disabled={!simulationData || isLoading}
                  >
                    <ResetIcon /> Reset Animation
                  </Button>
                </Flex>
              </Flex>
            </Collapsible.Content>
          </Collapsible.Root>
        </Container>
      </Section>
      {result && <Box><Text>Simulation Result: {result}</Text></Box>}
    </Container>

    <Box>
      {isLoading ? (
        <Flex
          direction="column"
          align="center"
          justify="center"
          style={{ padding: 30 }}
        >
          <Spinner size="5" />
          <Text size="4">Loading simulation data...</Text>
        </Flex>
      ) : simulationData ? (
        <Box className="PlotlyDiv">
          <Box id="plotly-div" ref={simRef} />
        </Box>
      ) : null}
    </Box>

  </Flex>
  );
};

export default SimulationPage;
