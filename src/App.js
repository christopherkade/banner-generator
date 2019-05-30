import React from 'react';
import styled from "styled-components"
import html2canvas from "html2canvas"

import useInputs from "hooks/useInputs"
import { InputWrapper } from "components/Molecules/InputWrapper"
import { Output } from "components/Atoms/Output"
import { Title } from "components/Atoms/Title"
import { DevIcon } from "components/Atoms/DevIcon"
import { Button } from "components/Atoms/Button"

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

  const handleGeneration = () => {
    html2canvas(document.querySelector("#capture")).then(canvas => {
      document.body.appendChild(canvas)
      // TODO: Convert canvas to PNG/JPG and upload it to a CDN
      // https://stackoverflow.com/questions/923885/capture-html-canvas-as-gif-jpg-png-pdf
    });
  }

  return (
    <Wrapper>
      <Title>
        <DevIcon />
        &nbsp; banner generator
      </Title>
      <GeneratorWrapper>
        <Output values={values} />
        <InputWrapper values={values} setters={setters} />
        <Button onClick={handleGeneration}>GENERATE BANNER</Button>
      </GeneratorWrapper>
    </Wrapper>
  );
}

export default App;
