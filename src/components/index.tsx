import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Router, Location } from "@reach/router";
import posed, { PoseGroup } from "react-pose";
import { Link } from "@reach/router";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 50, beforeChildren: 50 },
  exit: { opacity: 0 }
});

export interface PosedRouterProps {
  children: React.ReactNode;
}

export const PosedRouter: React.SFC<PosedRouterProps> = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup animateOnMount>
        <RouteContainer key={location.key}>
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0px;
    padding: 0px;
    transition: background 0.2s ease-in;
    font-family: 'Open Sans', sans-serif;
  }
  p {
    font-size: 1.2rem;
    color: #7E7F82;
    line-height: 2rem;
  }
  .hidden {
    display: none;
  }
  strong {
    font-size: 1.2rem;
    color: rgb(239, 171, 31);
  }
  h1, h2, h3, h4, h5 ,h6 {
    font-family: 'Permanent Marker', cursive;
  }
  hr {
    border-top: 1px solid #e7e7e7;
  }
`;

export const BodyContainer = styled.div`
  min-height: 100vh;
  padding: 1rem;
`;
export const AppContainer = styled.div`
  background-color: #fff;
  min-height: calc(100vh - 4rem);
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Navigation = styled.nav`
  box-sizing: border-box;
  min-width: 10%;
  background: #222;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  display: flex;
  & a {
    justify-content: space-between;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    line-height: 2.5rem;
    font-size: 1.5rem;
  }
  & svg {
    width: 24px;
    height: 24px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileNavigation = styled.nav`
  background: #222;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  display: none;
  & ul {
    list-style-type: none;
    display: flex;
    & li {
      &:not(:first-child) {
        margin-right: 0.5rem;
        margin-left: 0.5rem;
      }
      & a {
        justify-content: space-between;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #fff;
        font-size: 1rem;
      }
      & svg {
        margin-left: 0.5rem;
        width: 16px;
        height: 16px;
      }
    }
  }
  @media (max-width: 768px) {
    display: flex !important;
  }
`;

export const MainContent = styled.div`
  width: 90%;
  padding: 1rem;
  min-height: calc(100vh - 10rem);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  color: #fff;
  padding: 1rem;
  font-weight: 700;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled(Link)`
  font-size: 2rem;
  font-family: 'Permanent Marker', cursive;
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const AnimatedContainer = posed.div({
  enter: { staggerChildren: 250 }
});

export const Container = styled(AnimatedContainer)``;

export const SlideUp = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

export const SlideOver = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});

const AnimatedImg = posed.img({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});

export const CircleImg = styled(AnimatedImg)`
  border-radius: 50%;
`;

export const Img = styled(AnimatedImg)`
  max-width: 100%;
  height: auto;
`;

export const Flex = styled(AnimatedContainer)`
  display: flex;
  width: 100%;
  justify-content: ${(props: any) => props.justify || "flex-start"};
  align-items: ${(props: any) => props.align || "flex-start"};
  flex-direction: ${(props: any) => props.direction || "row"};
  flex-wrap: ${(props: any) => props.wrap || "none"};
`;

export const Arrow = styled.div`
  width: 0;
  height: 0;
  border-top: 40px solid transparent;
  border-bottom: 40px solid transparent;
  border-right: 40px solid #ccc;
`;

export const MobileButton = styled.button`
  display: none;
  border: none;
  background-color: transparent;
  & svg {
    width: 32px;
    height: 32px;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

const px = (n: string | number) => (typeof n === "number" ? n + "px" : n);

export const Grid = styled(AnimatedContainer)`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(
      calc(
        ${(props: any) => px(props.width)} - ${(props: any) => px(props.gap)}
      ),
      1fr
    )
  );
  grid-gap: ${(props: any) => px(props.gap)};
  align-items: ${(props: any) => props.align || null};
  grid-column: 1 / span 3;
  ${(props: any) =>
    !props.dontBreakOnMobile &&
    `@media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }`};
`;
