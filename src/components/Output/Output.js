import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 990px;
  height: 400px;
  min-height: 400px;
  min-width: 990px;
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.titleColor};
  border: 1px solid #dbdbdb;
  border: ${(props) => props.hasBorder ? `0.625rem solid ${props.borderColor}` : "0.625rem solid transparent"};

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
  const { bgColor, title, titleSize, titleColor, hasBorder, borderColor } = values

  return (
    <Wrapper bgColor={bgColor} titleColor={titleColor} hasBorder={hasBorder} borderColor={borderColor} id="capture">
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
    hasBorder: PropTypes.bool,
    borderColor: PropTypes.string
  }).isRequired
}

export default Output
