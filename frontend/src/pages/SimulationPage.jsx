import React, { useEffect, useState } from "react";
import Plotly from "plotly.js-basic-dist";
import {
  Button,
  Callout,
  Container,
  Heading,
  Section,
  Text,
  Box,
  Flex,
  Spinner,
} from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import Latex from "react-latex-next";

const SimulationPage = ({ title, description, simulationType, parameters }) => {
  const [simulationData, setSimulationData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSimulationData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/simulate`, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ simulation_type: simulationType, ...parameters }),
      });
      if (!response.ok) {
        throw new Error(`API call failed: ${response.statusText}`);
      }
      const data = await response.json();
      setSimulationData(data);
    } catch (error) {
      console.error("Error fetching simulation data:", error);
    } finally {
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
        xaxis: { title: "X", range: [-200, 200] },
        yaxis: { title: "Amplitude", range: [-0.25, 0.45] },
      });
    } else {
      console.log("Plotly initialization skipped...simulationData is null.");
    }
  }, [simulationData, title]);

  const startAnimation = () => {
    let step = 0;
    const interval = setInterval(() => {
      if (simulationData && step < simulationData.length) {
        const frame = simulationData[step++];
        Plotly.update("plotly-div", {
          y: [frame.psi_real, frame.psi_imag, frame.potential, frame.probability],
        });
      } else {
        clearInterval(interval);
      }
    }, 50);
  };

  return (
    <Flex
      direction="column"
      style={{
        alignContent: "center",
        justifyContent: "center",
        height: "100%",
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
      }}
    >
      <Container>
        <Section className="content">
          <Heading as="h2">{title}</Heading>
          <Text size="3">{description}</Text>
          <br />
          <Text size="3">
            The wave function <Latex>{`\\(\\Psi(x, 0)\\)`}</Latex> describes the
            state of a quantum particle at initial time{" "}
            <Latex>{`\\(t=0\\)`}</Latex>. In this simulation, the wave function is
            given by:
            <Latex>
              {String.raw`$$\Psi(x, 0)=\frac{e^{i\phi}}{(2\pi\sigma^2)^{1/4}} e^{-\frac{(x-\mu)^2}{4\sigma^2}},$$`}
            </Latex>
            <Latex>{`\\(\\phi\\)`}</Latex> represents some arbitrary real
            phase-angle. {" "}
            <Latex>{`\\(\\sigma\\)`}</Latex> represents the standard deviation,
            which determines the spread or width of the curve. {" "}
            <Latex>{`\\(\\mu\\)`}</Latex> represents mean or the central position of
            the wave packet, indicating where the wave packet is centered along
            the x-axis at <Latex>{`\\(t=0\\)`}</Latex>. {" "}
            Lastly, the exponential term is the Gaussian function that shapes the
            amplitude of the wave packet, ensuring it is normally distributed
            around the mean <Latex>{`\\(\\mu\\)`}</Latex>.
          </Text>
        </Section>
        <Callout.Root>
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            This animation is best viewed on desktop. You may experience some
            performance issues on older mobile devices.
          </Callout.Text>
        </Callout.Root>
      </Container>

      <Flex direction="row" className="button-container">
        <Button variant="solid" size="3" onClick={fetchSimulationData}>
          Fetch Data
        </Button>
        <Button variant="solid" size="3" onClick={startAnimation}>
          Start Animation
        </Button>
      </Flex>

      <Box>
        {isLoading ? (
          <Flex
            direction="column"
            align="center"
            justify="center"
            style={{ padding: 20 }}
          >
            <Spinner size="5" />
            <Text size="4">Loading simulation data...</Text>
          </Flex>
        ) : simulationData ? (
          <Box className="PlotlyDiv">
            <Box id="plotly-div" />
          </Box>
        ) : null}
      </Box>

    </Flex>
  );
};

export default SimulationPage;
