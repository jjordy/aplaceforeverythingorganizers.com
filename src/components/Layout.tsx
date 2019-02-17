import React, { useState } from "react";

import {
  AppContainer,
  Footer,
  Navigation,
  GlobalStyles,
  MainContent,
  BodyContainer,
  Header,
  Flex,
  MobileButton
} from ".";
import { Link } from "@reach/router";
import Github from "./Icons/GithubIcon";
import Envelope from "./Icons/EnvelopeIcon";
import Desktop from "./Icons/DesktopIcon";
import HomeIcon from "./Icons/HomeIcon";
import Bars from "./Icons/BarsIcon";
import { useDynamicRgb } from "../hooks";
import Sidebar from "./Sidebar";
import posed from "react-pose";

const AnimatedContent = posed.div({
  open: { x: 250 },
  closed: { x: 0 }
});

const Layout: React.SFC<{ chlidren?: React.ReactNode }> = ({ children }) => {
  const colorOne = useDynamicRgb([51, 171, 177], {
    interval: 300,
    disabled: true
  });
  const colorTwo = useDynamicRgb([239, 171, 31], {
    interval: 250,
    disabled:  true
  });
  const [sidebarOpen, toggleSidebar] = useState(false);
  const activeLink = ({ isCurrent }: { isCurrent: boolean }) => {
    return {
      style: {
        color: isCurrent ? `rgb(${colorTwo.join(",")})` : "#FFF",
        fill: isCurrent ? `rgb(${colorTwo.join(",")})` : "#FFF"
      }
    };
  };

  return (
    <BodyContainer
      style={{
        background: `linear-gradient(-45deg, rgb(${colorOne.join(
          ","
        )}), rgb(${colorTwo.join(",")}))`
      }}
    >
      <GlobalStyles />
      <Sidebar open={sidebarOpen}>
        <Link to="/" onClick={() => toggleSidebar(false)}>
          Home
          <HomeIcon />
        </Link>
        <Link to="/work" onClick={() => toggleSidebar(false)}>
          Work
          <Desktop />
        </Link>
        <Link to="/contact" onClick={() => toggleSidebar(false)}>
          Contact
          <Envelope />
        </Link>
        <a href="https://github.com/jjordy">
          Github
          <Github />
        </a>
      </Sidebar>
      <AnimatedContent pose={sidebarOpen ? "open" : "closed"}>
        <AppContainer
          onClick={() => {
            if (sidebarOpen) {
              toggleSidebar(false);
            }
          }}
        >
          <Navigation>
            <Link to="/" getProps={activeLink}>
              Home
              <HomeIcon />
            </Link>
            <Link to="/work" getProps={activeLink}>
              Work
              <Desktop />
            </Link>
            <Link to="/contact" getProps={activeLink}>
              Contact
              <Envelope />
            </Link>
            <a href="https://github.com/jjordy">
              Github
              <Github style={{ fill: "white" }} />
            </a>
          </Navigation>

          <MainContent>
            <Flex align="center" justify="space-between">
              <Header
                to="/"
                style={{
                  color: `rgb(${colorTwo.join(",")})`
                }}
              >
                JORDAN ADDISON
              </Header>
              <MobileButton onClick={() => toggleSidebar(!sidebarOpen)}>
                <Bars
                  style={{
                    fill: `rgb(${colorTwo.join(",")})`
                  }}
                />
              </MobileButton>
            </Flex>
            <div
              style={{
                height: "2px",
                marginTop: ".5rem",
                marginBottom: ".5rem",
                background: `linear-gradient(-45deg, rgb(${colorOne.join(
                  ","
                )}), rgb(${colorTwo.join(",")}))`
              }}
            />
            <strong
              style={{
                color: `rgba(${colorOne.join(",")})`
              }}
            >
              Fullstack Web Developer
            </strong>
            <div style={{ marginBottom: "1rem" }} />
            {children}
          </MainContent>
        </AppContainer>
      </AnimatedContent>
      <Footer>&copy; 2019 Jordan Addison</Footer>
    </BodyContainer>
  );
};

export default Layout;
