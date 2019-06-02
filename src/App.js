import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import html2canvas from "html2canvas"

import useInputs from "hooks/useInputs"
import { InputWrapper } from "components/InputWrapper"
import { Output } from "components/Output"
import { Title } from "components/Title"
import { DevIcon } from "components/DevIcon"
import { Button } from "components/Buttons/Button"
import { LinkButton } from "components/Buttons/LinkButton"
import { GithubLink } from "components/GithubLink"

const Wrapper = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const GeneratorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8rem;

  @media (max-width: 769px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`

const ActionWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const App = () => {
  const [values, setters] = useInputs()
  const [imgURL, setImgURL] = useState("#")

  /**
   * Called when the user updates the banner
   * Renders the output as a canvas with html2canvas
   * Transforms the canvas to a data URI, and save it for later download
   */
  useEffect(() => {
    const output = document.getElementById("capture")
    html2canvas(output, {
      // Work around
      // Find a way to have a fixed 1000x420 size without croping out borders or starting with a 10px offset
      // Certainly related to html2canvas
      width: 1015,
      height: 440,
      x: output.offsetLeft + 2,
      y: output.offsetTop,
      scale: 1
    }).then(canvas => {
      setImgURL(canvas.toDataURL('image/png'))
    });
  }, [values])

  return (
    <>
      <GithubLink />
      <Wrapper>
        <Title>
          <DevIcon />
          &nbsp; banner generator
        </Title>
        <GeneratorWrapper>
          <Output values={values} />
          <ActionWrapper>
            <InputWrapper values={values} setters={setters} />
            <Button onClick={setters.randomizeInputs}>
              RANDOMISE
            </Button>
            <LinkButton href={imgURL} download="banner.png">
              DOWNLOAD BANNER
            </LinkButton>
          </ActionWrapper>
        </GeneratorWrapper>
      </Wrapper>
    </>
  );
}

export default App;
