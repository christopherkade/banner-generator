import React from 'react'
import { render } from 'react-testing-library'

import Title from "./Title"

describe("<Title />", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const { container } = render(<Title />);
      expect(container).toMatchSnapshot();
    });
  })

  describe("children prop", () => {
    it("should display the children prop", () => {
      const { container } = render(<Title>Display me !</Title>)
      expect(container.textContent).toBe("Display me !")
    })
  })
})
