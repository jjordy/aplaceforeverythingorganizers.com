import React from "react";
import { RouteComponentProps } from "@reach/router";
import {
  Center,
  Container,
  SlideUp,
  SlideOver,
  CircleImg,
  Flex
} from "../../components";
import me from "./me.jpg";
import QuickStats from "../../components/QuickStats";
import styled from "styled-components";

export interface HomeProps extends RouteComponentProps {}

const MobileFriendlyContainer = styled(Flex)`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const HomePage: React.SFC<HomeProps> = () => {
  return (
    <Center style={{ minHeight: 350 }}>
      <Container>
        <MobileFriendlyContainer align="center">
          <SlideUp style={{ padding: "1rem" }}>
            <h1 className="hidden">A Place for everything organizers</h1>
            <h1 style={{
              color: '#F4CABC',
              textShadow: '1px 1px 1px #e7e7e7',
              fontSize: 36
            }}>COMING SOON</h1>
          </SlideUp>
        </MobileFriendlyContainer>
      </Container>
    </Center>
  );
};

export default HomePage;
