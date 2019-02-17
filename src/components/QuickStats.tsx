import React from "react";
import { SlideOver, Flex } from ".";
import styled from "styled-components";

const StyledStat = styled.div`
  color: ${props => props.color || "#FE5F1B"};
  padding: 2rem;
  min-width: 150px;
  text-align: center;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 0 0 100%;
  @media (max-width: 768px) {
    min-width: 275px;
  }
`;

const StatText = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const StatMetric = styled.span`
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const StatNum = styled.span`
  font-size: 4rem;
`;

const StatsContainer = styled(Flex)`
  max-width: 1140px;
  min-height: 450px;
  margin: auto;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Stat = ({
  num,
  text,
  color
}: {
  num: number | string;
  text: string;
  color?: string;
}) => (
  <StyledStat color={color}>
    <StatNum>{num}</StatNum>
    <StatText>{text}</StatText>
  </StyledStat>
);

const QuickStats = () => (
  <StatsContainer align="center" wrap="wrap" justify="space-between">
    <SlideOver>
      <Stat num="6+" text="YEARS Expirience" />
    </SlideOver>
    <SlideOver>
      <Stat
        num="50+"
        text="Websites and Applications In Production"
        color="#33ABB1"
      />
    </SlideOver>
    <SlideOver>
      <Stat num="5" text="Languages Known" color="#EFAB1F" />
    </SlideOver>
  </StatsContainer>
);

export default QuickStats;
