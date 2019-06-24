import React from 'react';
import styled from "styled-components"

import { Title } from "components/Title"
import { DevIcon } from "components/DevIcon"
import { GithubLink } from "components/GithubLink"
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
    <>
      <GithubLink />
      <Wrapper>
        <Title>
          <DevIcon /> &nbsp; banner generator
        </Title>
        <BannerWrapper />
      </Wrapper>
    </>
  );
}

export default App;
