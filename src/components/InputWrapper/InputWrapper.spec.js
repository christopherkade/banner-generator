import React from 'react'
import { render } from 'react-testing-library'

import InputWrapper from "./InputWrapper"

describe("<InputWrappr />", () => {
  const values = {
    bgColor: "black",
    title: "mockedTitle",
    titleSize: "5",
    titleColor: "white",
    hasBorder: false,
    borderColor: "white"
  }

  const setters = {
    setBgColor: () => { },
    setTitle: () => { },
    setTitleSize: () => { },
    setTitleColor: () => { },
    setHasBorder: () => { },
    setBorderColor: () => { }
  }

  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const { container } = render(<InputWrapper values={values} setters={setters} />);
      expect(container).toMatchSnapshot();
    });
  })
})
