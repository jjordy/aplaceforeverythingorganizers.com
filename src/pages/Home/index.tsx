import React from "react";
import { RouteComponentProps } from "@reach/router";
import {
  Center,
  Container,
  SlideUp,
  Flex,
  Grid,
  Image
} from "../../components";
import me from "./me.jpg";
import QuickStats from "../../components/QuickStats";
import styled from "styled-components";

export interface HomeProps extends RouteComponentProps { }

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
            <h1 className="hidden" style={{ color: '#986153' }}>A Place for everything organizers</h1>
            <h2 style={{
              color: '#986153',
              textShadow: '1px 1px 1px #e7e7e7',
              fontSize: 36
            }}>Tag Line...</h2>
            <Grid width='33%' gap={16} align='center'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptates repudiandae, nulla quasi vel necessitatibus placeat modi voluptatem doloribus excepturi expedita. Inventore eius neque labore cum eligendi corrupti recusandae hic.
              </p>
              <Image src='https://via.placeholder.com/400x250/e7e7e7' />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptates repudiandae, nulla quasi vel necessitatibus placeat modi voluptatem doloribus excepturi expedita. Inventore eius neque labore cum eligendi corrupti recusandae hic.
              </p>
            </Grid>
          </SlideUp>
        </MobileFriendlyContainer>
      </Container>
    </Center>
  );
};

export default HomePage;
