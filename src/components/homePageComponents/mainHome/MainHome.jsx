import React from 'react';
import MainHomeText from './mainHomeText/MainHomeText';
import MainPicture from './mainPicture/MainPicture';
import PlaceAndOrderButton from './placeAndOrderButton/PlaceAndOrderButton';
import Stars from './stars/Stars';
import styled from 'styled-components';

const Outer = styled.div`
position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #F5FBFC;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 18% 75%);
    z-index: -1;
  }
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 120px;
  
`
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const MainHome = () => {
  return (
    <Outer>
      <Wrapper>
        <ContentWrapper>
        <MainHomeText/>
        <PlaceAndOrderButton/>
        <Stars/>
        </ContentWrapper>
          <MainPicture/>
      </Wrapper>
      </Outer>
  );
};

export default MainHome;