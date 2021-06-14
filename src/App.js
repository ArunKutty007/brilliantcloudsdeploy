import {
  Topbar,
  Home,
  About,
  Services,
  Process,
  Contact,
  Portfolio,
  OtherServices,
  Testimonials,
  Model,
} from "./components/index";
import "./App.scss";

import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div className="app">
      <Topbar sidebar={sidebar} setSidebar={setSidebar} />

      <div className="sections">
        <Home />
        <About />
        <Services />
        <OtherServices />
        <Process />

        <Portfolio />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}
export default App;
