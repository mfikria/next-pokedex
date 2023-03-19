import { renderHook } from '@testing-library/react-hooks';
import useScrollToEnd from './useScrollToEnd';

it('should set isEnd to true when scrolled to the end of the page', () => {
  // Set up a mock document object with a large height
  Object.defineProperty(global.document.documentElement, 'scrollHeight', { value: 2000 });
  Object.defineProperty(global.document.documentElement, 'clientHeight', { value: 500 });
  Object.defineProperty(window, 'pageYOffset', {
    value: 1500
  });

  // Set up the mock callback function
  const mockCallback = jest.fn();
  const { rerender } = renderHook(() => useScrollToEnd(mockCallback));

  // Simulate scrolling to the bottom
  rerender();

  // Assert that the hook returns true and the callback function is called
  expect(mockCallback).toHaveBeenCalledWith(true);
});

it('should set isEnd to false when scrolled to the middle of the page', () => {
  // Set up a mock document object with a large height
  Object.defineProperty(global.document.documentElement, 'scrollHeight', { value: 2000 });
  Object.defineProperty(global.document.documentElement, 'clientHeight', { value: 500 });
  Object.defineProperty(window, 'pageYOffset', {
    value: 1000
  });

  // Set up the mock callback function
  const mockCallback = jest.fn();
  const { rerender } = renderHook(() => useScrollToEnd(mockCallback));

  // Simulate scrolling to the middle
  rerender();

  // Assert that the hook returns true and the callback function is called
  expect(mockCallback).toHaveBeenCalledWith(false);
});