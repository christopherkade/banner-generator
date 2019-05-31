import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import html2canvas from "html2canvas"

import useInputs from "hooks/useInputs"
import { InputWrapper } from "components/InputWrapper"
import { Output } from "components/Output"
import { Title } from "components/Title"
import { DevIcon } from "components/DevIcon"
import { Button } from "components/Button"
import { GithubLink } from "components/GithubLink"
import { Footer } from "components/Footer"

const Wrapper = styled.div`
  text-align: center;
`

const GeneratorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const App = () => {
  const [values, setters] = useInputs()
  const [imgURL, setImgURL] = useState("#")

  useEffect(() => {
    html2canvas(document.getElementById("capture"), {
      width: 1010,
      height: 420,
      scale: 1
    }).then(canvas => {
      setImgURL(canvas.toDataURL('image/jpg'))
    });
  }, [values])

  return (
    <Wrapper>
      <GithubLink />
      <Title>
        <DevIcon />
        &nbsp; banner generator
      </Title>
      <GeneratorWrapper>
        <Output values={values} />
        <InputWrapper values={values} setters={setters} />
        <Button href={imgURL} download="banner.jpg">GENERATE BANNER</Button>
      </GeneratorWrapper>
      <Footer />
    </Wrapper>
  );
}

export default App;
