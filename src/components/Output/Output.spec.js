import React from 'react'
import { render } from 'react-testing-library'

import Output from "./Output"

describe("<Output />", () => {
  const values = {
    bgColor: "black",
    title: "mockedTitle",
    titleSize: "5",
    titleColor: "white",
    borderSize: 0
  }

  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const { container } = render(<Output values={values} />);
      expect(container).toMatchSnapshot();
    });
  })

  describe("title prop", () => {
    it("should display the title passed as prop", () => {
      const { container } = render(<Output values={values} />)
      expect(container.textContent).toContain("mockedTitle")
    })
  })
})
