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
import styled from "styled-components";
import about_us_img from './about_us.png'

export interface HomeProps extends RouteComponentProps { }

const MobileFriendlyContainer = styled(Flex)`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const About: React.SFC<HomeProps> = () => {
  return (
    <Center style={{ minHeight: 350 }}>
      <Container>
        <MobileFriendlyContainer align="center">
          <SlideUp style={{ padding: "1rem" }}>
            <h1 style={{
              color: '#986153',
              textShadow: '1px 1px 1px #e7e7e7',
              fontSize: 36
            }}>About Us</h1>
            <Grid width='50%' gap={16} align='center'>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptates repudiandae, nulla quasi vel necessitatibus placeat modi voluptatem doloribus excepturi expedita. Inventore eius neque labore cum eligendi corrupti recusandae hic.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptates repudiandae, nulla quasi vel necessitatibus placeat modi voluptatem doloribus excepturi expedita. Inventore eius neque labore cum eligendi corrupti recusandae hic.
              </p>
              </div>
              <div style={{display: 'flex', justifyContent: 'center', padding: '3rem'}}>
              <Image src={about_us_img} alt='A picture of me and my husband with our 2 boys'/>
              </div>
            </Grid>
          </SlideUp>
        </MobileFriendlyContainer>
      </Container>
    </Center>
  );
};

export default About;
