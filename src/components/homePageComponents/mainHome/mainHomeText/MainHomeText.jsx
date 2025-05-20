import React from 'react';
import styled from 'styled-components';


const Heading = styled.h1`
  font-weight: 400;
  max-width: 560px;
  font-size: 60px;
`
const Highlight = styled.span`
  color: #35B8BE;
`
const Paragraph = styled.p`
  font-size: 18px;
  max-width: 540px;
  color: #546285;
  line-height: 1.6;
`

const MainHomeText = () => {
  return (
    <div>
      <Heading>
        Beautiful food & takeaway, <Highlight>delivered</Highlight> to your door.
      </Heading>
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s.
      </Paragraph>
    </div>
  );
};

export default MainHomeText;