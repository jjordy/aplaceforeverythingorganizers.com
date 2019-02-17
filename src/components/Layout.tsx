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
  MobileButton,
  Image,
  Logo
} from ".";
import { Link } from "@reach/router";
import Github from "./Icons/GithubIcon";
import Envelope from "./Icons/EnvelopeIcon";
import Desktop from "./Icons/DesktopIcon";
import HomeIcon from "./Icons/HomeIcon";
import Bars from "./Icons/BarsIcon";
import { useDynamicRgb, useWindowSize } from "../hooks";
import Sidebar from "./Sidebar";
import posed from "react-pose";
import logo from './logo.png'
import { ThemeProvider } from 'styled-components'

const AnimatedContent = posed.div({
  open: { x: 250 },
  closed: { x: 0 }
});

const Layout: React.SFC<{ chlidren?: React.ReactNode }> = ({ children }) => {
  const { width } = useWindowSize()
  const colorOne = useDynamicRgb([152, 97, 83], {
    interval: 300,
    disabled: true
  });
  const colorTwo = useDynamicRgb([252, 192, 177], {
    interval: 250,
    disabled:  true
  });
  const [sidebarOpen, toggleSidebar] = useState(false);
  const activeLink = ({ isCurrent }: { isCurrent: boolean }) => {
    return {
      style: {
        color: isCurrent ? `rgb(244, 202, 188)` : "#777",
        fill: isCurrent ? `rgb(244, 202, 188)` : "#777"
      }
    };
  };
  return (
    <ThemeProvider theme={{
      primary: '#B4ACAA',
      secondary: '#F7E5E1',
      tertiary: '#E5DED6',
      pink: '#f4cabc',
      orange: '#986153'
    }}>

    <BodyContainer
      style={{
        background: `linear-gradient(-45deg, rgba(${colorOne.join(
          ","
        )}, 0.6), rgba(${colorTwo.join(",")}, 0.6))`
      }}
    >
      <GlobalStyles />
      <Sidebar open={sidebarOpen}>
        <Link to="/" onClick={() => toggleSidebar(false)}>
          Home
          <HomeIcon />
        </Link>
        <Link to="/contact" onClick={() => toggleSidebar(false)}>
          Contact
          <Envelope />
        </Link>
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
              <Link to="/about" getProps={activeLink}>
                Meet Genna
              <HomeIcon />
              </Link>
            <Link to="/contact" getProps={activeLink}>
              Contact
              <Envelope />
            </Link>
          </Navigation>

          <MainContent>
            <Flex align="center" justify={width > 768 ? 'center' : 'space-between'}>
              <Header to="/">
                <Logo>
                  <Image src={logo} />
                </Logo>
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
            <div style={{ marginBottom: "1rem" }} />
            {children}
          </MainContent>
        </AppContainer>
      </AnimatedContent>
      <Footer>&copy; 2019 A Place for Everything Organizers</Footer>
    </BodyContainer>
    </ThemeProvider>
  );
};

export default Layout;
