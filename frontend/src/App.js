import Container from "./Components/plantContainer";
import PlantVar from "./Components/svgPlant";
import Navbar from "./Components/navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/home";
import Weekly from "./Pages/weekly";
import Project from "./Pages/project";
import Login from "./Pages/login";

function App() {
  
  return (
    <div className="App" style={{backgroundColor: '#F0F5F9'}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/weekly" element={<Weekly />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
