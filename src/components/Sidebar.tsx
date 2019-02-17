import React from "react";
import posed from "react-pose";
import styled from "styled-components";

const AnimatedSidebar = posed.div({
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -250 }
});

const StyledSidebar = styled(AnimatedSidebar)`
  width: 250px;
  top: 0;
  left: 0;
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  z-index: 1;
  background: #fff;

  & a {
    font-size: 1.5rem;
    width: 100%;
    justify-content: space-between;
    display: flex;
    align-items: center;
    font-weight: 700;
    text-decoration: none;
    margin-bottom: 0.5rem;
    color: #777;
    line-height: 2rem;
    & svg {
      width: 24px;
      height: 24px;
      fill: #777;
    }
  }
`;

const Sidebar = ({
  open,
  children
}: {
  open: boolean;
  children: React.ReactNode;
}) => {
  return (
    <StyledSidebar pose={open ? "open" : "closed"}>{children}</StyledSidebar>
  );
};

export default Sidebar;
