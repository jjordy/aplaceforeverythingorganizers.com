import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import posed from "react-pose";
import { Grid, Img } from "../../components";
import styled from "styled-components";
import blur from "./blur.png";
import globalfas from "./globalfas.png";
import blur2 from "./blur-2.png";
import blur3 from "./blur-3.png";

export interface WorkProps extends RouteComponentProps {}

const ListContainer = posed.ul({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});

const Item = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 250, opacity: 0 }
});

const WorkItem = styled(Item)`
  width: 100%;
  border: 1px solid #e7e7e7;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 1px 1px 1px #e7e7e7;
  & img {
    background-color: #000;
    opacity: 0.2;
  }
  & .header {
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    text-shadow: 1px 1px 1px #222;
    text-transform: uppercase;
    font-family: 'Permanent Marker', cursive;
    padding: 1rem;
  }
`;

const WorkPage: React.SFC<WorkProps> = () => {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Work and Projects</h1>
      <h2 style={{ textAlign: "center" }}>Under construction</h2>
      {/* <Grid width={"25%"} gap={16}>
        <WorkItem
          style={{
            background: `url(${blur}) no-repeat center center fixed`,
            backgroundSize: "cover",
            minHeight: 200
          }}
        >
          <div className="header">Globalfas.com</div>
        </WorkItem>
        <Item>
          <WorkItem
            style={{
              background: `url(${blur2}) no-repeat center center fixed`,
              backgroundSize: "cover",
              minHeight: 200
            }}
          >
            <div className="header">Globalfas.com</div>
          </WorkItem>
        </Item>
        <Item>
          <WorkItem
            style={{
              background: `url(${blur3}) no-repeat center center fixed`,
              backgroundSize: "cover",
              minHeight: 200
            }}
          >
            <div className="header">Globalfas.com</div>
          </WorkItem>
        </Item>
      </Grid> */}
    </React.Fragment>
  );
};

export default WorkPage;
