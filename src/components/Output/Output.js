import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 1000px;
  height: 420px;
  background-color: ${ (props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${ (props) => props.titleColor};
  border: 1px solid #dbdbdb;
  border: ${ (props) => props.hasBorder ? "0.625rem solid white" : "0.625rem solid transparent"};

  @media (max-width: 1200px) {
    width: auto;
    height: auto;
  }
`

const Title = styled.h1`
  font-weight: 300;
  font-size: ${ (props) => props.size}rem;
`

const Output = ({ values }) => {
  const { bgColor, title, titleSize, titleColor, hasBorder } = values

  return (
    <Wrapper bgColor={bgColor} titleColor={titleColor} hasBorder={hasBorder} id="capture">
      <Title size={titleSize}>{title}</Title>
    </Wrapper>
  )
}

Output.propTypes = {
  values: PropTypes.shape({
    bgColor: PropTypes.string,
    title: PropTypes.string,
    titleSize: PropTypes.string,
    titleColor: PropTypes.string,
    hasBorder: PropTypes.bool
  }).isRequired
}

export default Output
