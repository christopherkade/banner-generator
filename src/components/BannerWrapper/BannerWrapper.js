import React, { useEffect, useState } from "react"
import styled from "styled-components"
import html2canvas from "html2canvas"

import { GithubLink } from "components/GithubLink"
import { InputWrapper } from "components/InputWrapper"
import { Output } from "components/Output"
import { Button } from "components/Buttons/Button"
import { LinkButton } from "components/Buttons/LinkButton"
import useInputs from "hooks/useInputs"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 1279px) {
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 0;
  }
`

const ActionWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const BannerWrapper = () => {
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
      width: 1000,
      height: 420,
      scale: 1
    }).then(canvas => {
      setImgURL(canvas.toDataURL('image/png'))
    });
  }, [values])

  return (
    <>
      <GithubLink color={values.bgColor} />

      <Wrapper>
        <Output values={values} />
        <ActionWrapper>
          <InputWrapper values={values} setters={setters} />
          <Button onClick={setters.randomizeInputs}>
            RANDOMISE
          </Button>
          <LinkButton id="download-button" download="banner.png" href={imgURL}>
            DOWNLOAD BANNER
          </LinkButton>
        </ActionWrapper>
      </Wrapper>
    </>
  )
}

export default BannerWrapper
