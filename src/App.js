import React from 'react';
import styled from "styled-components"

import { BannerWrapper } from "components/BannerWrapper"

const Wrapper = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const App = () => {
  return (
    <Wrapper>
      <BannerWrapper />
    </Wrapper>
  );
}

export default App;
