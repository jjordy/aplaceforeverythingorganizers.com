import React from "react";
import { RouteComponentProps } from "@reach/router";
import posed from "react-pose";
import { Center } from "../../components";

export interface WorkProps extends RouteComponentProps {}

const ListContainer = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});

const Item = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

const WorkPage: React.SFC<WorkProps> = () => {
  return (
    <ListContainer>
      <Item>
        <Center style={{ minHeight: 350 }}>
          <div>
            <h1>404 Page Not Found</h1>
            <p>Man we couldnt find that page... Bummer</p>
          </div>
        </Center>
      </Item>
    </ListContainer>
  );
};

export default WorkPage;
