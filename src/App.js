import Navbar from "./Components/Navbar";
import Logo from "./assets/img/logo-32.png";
import Hero from "./Components/Hero";
import Brand from "./Components/Brand";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
}

export default App;

function Index() {
  return (
    <>
      <Navbar logo={Logo} />
      <Hero />
      <Brand />
      <div className="mb-40"></div>
    </>
  );
}
