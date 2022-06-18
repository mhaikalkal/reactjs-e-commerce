import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Search from "./components/searchsection";

import MainProduct from "./containers/MainProduct";

import Logo from "./assets/img/logo-32.png";
import Shoe from "./assets/img/shoe.jpg";

function App() {
  return (
    <>
      <Navbar logo={Logo} />
      <Hero />
      {/* <Search /> */}
      <MainProduct />
      <div className="mb-40"></div>
    </>
  );
}

export default App;
