// base routes
import Routes from "./routes";

// AOS
import AOS from "aos"; // biar bisa dipake global
import "aos/dist/aos.css";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Routes />;
}

export default App;
