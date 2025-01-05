import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SimulationPage from "./pages/SimulationPage";
import simulationInfo from "./utils/simInfo";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Methods from "./pages/MethodsPage";
import Navbar from "./components/Navbar";
import "@radix-ui/themes/styles.css";

const App = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/methods" element={<Methods />} />
          {simulationInfo.map((simulation, index) => (
          <Route
            key={index}
            path={simulation.path}
            element={
              <SimulationPage
                title={simulation.title}
                description={simulation.description}
                simulationType={simulation.simulationType}
                defaultParameters={simulation.parameters}
              />
            }
          />
        ))}
        </Routes>
      </Router>
  );
};

export default App;
