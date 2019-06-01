import React from 'react';
import LinkButton from './LinkButton';
import { render, fireEvent, cleanup } from 'react-testing-library';

afterEach(cleanup)

describe('<LinkButton />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<LinkButton>Click me</LinkButton>);
      expect(container).toMatchSnapshot();
    });
  });

  describe('children prop', () => {
    it('should display Click me as LinkButton children', () => {
      const { getByText } = render(<LinkButton>Click me</LinkButton>);
      expect(getByText("Click me").textContent).toBe('Click me');
    });
  });

  describe('onClick prop', () => {
    it('should call onClick function when LinkButton is clicked', () => {
      const onClickMock = jest.fn();
      const { getByText } = render(<LinkButton onClick={onClickMock}>Click me</LinkButton>);
      fireEvent.click(getByText('Click me'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
