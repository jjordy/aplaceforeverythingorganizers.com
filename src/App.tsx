import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { PosedRouter } from "./components";
import Layout from "./components/Layout";

const App: React.SFC<{}> = () => {
  return (
    <Layout>
      <PosedRouter>
        <Home path="/" />
        <About path="/about-us" />
        <Contact path="/contact" />
        <NotFound default />
      </PosedRouter>
    </Layout>
  );
};

export default App;
