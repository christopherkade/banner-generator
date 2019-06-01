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
    const output = document.getElementById("capture")
    html2canvas(output, {
      // Work around
      // Find a way to have a fixed 1000x420 size without croping out borders or starting with a 10px offset
      // Certainly related to html2canvas
      width: 1015,
      height: 440,
      x: output.offsetLeft + 10,
      y: output.offsetTop,
      scale: 1
    }).then(canvas => {
      setImgURL(canvas.toDataURL('image/jpeg'))
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
        <Button href={imgURL} download="banner.jpeg">GENERATE BANNER</Button>
      </GeneratorWrapper>
      <Footer />
    </Wrapper>
  );
}

export default App;
