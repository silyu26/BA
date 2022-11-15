import Container from "./Components/plantContainer";
import PlantVar from "./Components/svgPlant";
import Navbar from "./Components/navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/home";
import Weekly from "./Pages/weekly";
import Project from "./Pages/project";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/weekly" element={<Weekly />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
