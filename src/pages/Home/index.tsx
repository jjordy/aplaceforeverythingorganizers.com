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
            <h1 className="hidden">Jordan Addison - Fullstack Web Developer</h1>
            <p>
              <strong>Hey!!</strong> I'm Jordy, I am a full stack web developer
              from beautiful Gulfport, Mississippi. Ive been developing web
              applications for quite a few years now and have learned some
              pretty awesome skills along the way. I have built everything from
              small landing pages to large corporate web applications using the
              latest and most popular technologies available.
            </p>
          </SlideUp>
          <MobileFriendlyContainer
            direction="column"
            align="center"
            justify="center"
          >
            <CircleImg src={me} alt="This is me" height="100" />
            <SlideOver>
              <h3 style={{ color: "#ccc" }}>
                My beautiful wife and I on our wedding night
              </h3>
            </SlideOver>
          </MobileFriendlyContainer>
        </MobileFriendlyContainer>
        <SlideOver>
          <hr />
        </SlideOver>
        <QuickStats />
      </Container>
    </Center>
  );
};

export default HomePage;
