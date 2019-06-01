import React from 'react';
import Button from './Button';
import { render, fireEvent, cleanup } from 'react-testing-library';

afterEach(cleanup)

describe('<Button />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Button>Click me</Button>);
      expect(container).toMatchSnapshot();
    });
  });

  describe('children prop', () => {
    it('should display Click me as Button children', () => {
      const { getByText } = render(<Button>Click me</Button>);
      expect(getByText("Click me").textContent).toBe('Click me');
    });
  });

  describe('onClick prop', () => {
    it('should call onClick function when Button is clicked', () => {
      const onClickMock = jest.fn();
      const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);
      fireEvent.click(getByText('Click me'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
