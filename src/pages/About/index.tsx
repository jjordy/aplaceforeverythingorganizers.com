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

const MobileImageContainer = styled.div`
  display: none;
  padding: 1rem;
  & img {
    border-radius: 6%;
  }
  @media(max-width:768px) {
    display: block;
  }
`

const DesktopImageContainer =styled.div`
  display: flex;
  padding: 5rem;
  justify-content: center;
  & img {
    border-radius: 6%;
  }
  @media(max-width:768px) {
    display: none;
  }
`

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
            }}>About Me</h1>
            <Grid width='50%' gap={16} align='center'>
              <div>
                <p>
                  <span className='huge'>My</span> name is Genna Irby. I have always been business oriented and enjoyed helping people. 
                  I graduated from the University of Southern Mississippi with a degree in Business Administration.</p>
                  <MobileImageContainer>
                    <Image src={about_us_img} alt='A picture of me and my husband with our 2 boys'/>
                  </MobileImageContainer>
                 <p>Fast forward a few years, I am now a twin mom, realtor, and the owner/head organizer of A Place for Everything Organizers! 
                  As a realtor, I saw my clients’ need for an organizer and knew that I could help. I have created many organizing solutions, 
                  both in my own home and in others’ homes. 
                </p>
                <p>
                  What I do:<br />
                  <span role='img'aria-label='House'>🏠</span> I Come to your house, <strong>evaluate your needs</strong>, and <strong>create solutions</strong>.
                </p>
                <a
                  href='https://www.facebook.com/GenIrbyOrganizer/?rc=p'
                  style={{
                  color: '#986153',
                  textShadow: '1px 1px 1px #e7e7e7',
                  fontSize: 24
                }}>
                  Check out before and after pictures on my facebook page.
                </a>
              </div>
              <DesktopImageContainer>
                <Image src={about_us_img} alt='A picture of me and my husband with our 2 boys'/>
              </DesktopImageContainer>
            </Grid>
          </SlideUp>
        </MobileFriendlyContainer>
      </Container>
    </Center>
  );
};

export default About;
