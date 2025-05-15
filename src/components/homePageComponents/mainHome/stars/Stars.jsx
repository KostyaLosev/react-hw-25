import React from 'react';
import styled from 'styled-components';
import Star from '../../../../assets/Star.svg'

const StarWrapper = styled.div`
  margin-top: 20px;
`

const Trustpilot = styled.span`
  display: flex;
  align-items: center;
  gap: 6px
`

const RatingHighlight = styled.span`
  color: #35B8BE;
`

const Stars = () => {
  return (
    <StarWrapper>
      <Trustpilot>
    <img src = {Star}></img>
    Trustpilot
    </Trustpilot>
    <p>
        <RatingHighlight>4.8 out of 5</RatingHighlight> based on 2000+ reviews
      </p>
      </StarWrapper>
  );
};

export default Stars;
