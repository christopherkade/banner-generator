import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 1000px;
  height: 420px;
  background-color: ${ (props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${ (props) => props.titleColor};
  padding: 4rem;
  border: 1px solid #dbdbdb;
`

const Title = styled.h1`
  font-weight: 300;
  font-size: 3rem;
`

const Output = ({ values }) => {
  const { bgColor, title, titleColor } = values

  return (
    <Wrapper bgColor={bgColor} titleColor={titleColor} id="capture">
      <Title tileColor={titleColor}>{title}</Title>
    </Wrapper>
  )
}

export default Output
