import React from "react";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { PosedRouter } from "./components";
import Layout from "./components/Layout";

const App: React.SFC<{}> = () => {
  return (
    <Layout>
      <PosedRouter>
        <Home path="/" />
        <Work path="/work" />
        <Contact path="/contact" />
        <NotFound default />
      </PosedRouter>
    </Layout>
  );
};

export default App;
