import React from "react"
import styled from "styled-components"

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`

const Text = styled.p`
  font-size: 0.9rem;
`

const Link = styled.a`
  color: #fe4a49;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <Text>
        Made with <span role="img" aria-label="">☕️</span> by <Link href="https://twitter.com/christo_kade">@christo_kade</Link>
      </Text>
    </Wrapper>
  )
}

export default Footer
