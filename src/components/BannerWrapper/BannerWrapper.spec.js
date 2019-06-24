import React from 'react'
import { render } from 'react-testing-library'

import BannerWrapper from "./BannerWrapper"

describe("<GeneratorWrapper />", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const { container } = render(<BannerWrapper />);
      expect(container).toMatchSnapshot();
    });
  })
})
