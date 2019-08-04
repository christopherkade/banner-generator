import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 1000px;
  height: 420px;
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.titleColor};
  border: 1px solid #dbdbdb;
  border: ${(props) => `${props.borderSize}px solid ${props.borderColor}`};
  box-sizing: border-box;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1279px) {
    width: auto;
    height: auto;
  }
`

const Title = styled.h1`
  font-weight: 300;
  font-size: ${ (props) => props.size}rem;
`

const Output = ({ values }) => {
  const { bgColor, title, titleSize, titleColor, borderColor, borderSize, image } = values

  return (
    <Wrapper bgColor={bgColor} titleColor={titleColor} borderColor={borderColor} borderSize={borderSize} image={image} id="capture">
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
    borderColor: PropTypes.string,
    hasBorder: PropTypes.bool,
    image: PropTypes.string
  }).isRequired
}

export default Output
