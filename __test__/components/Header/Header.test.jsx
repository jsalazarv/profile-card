import { render } from '@testing-library/react';
import { Header } from '../../../src/components/Header';

describe('[Header Component]', () => {
  describe('[Snapshots]', () => {
    test('Should have the header class', () => {
      const { container } = render(<Header />);

      expect(container.firstChild).toHaveClass('header');
      expect(container).toMatchSnapshot();
    });

    test('Should have the [Js] text', () => {
      const { container } = render(<Header />);

      expect(container.firstChild).toHaveTextContent('[Js]');
      expect(container).toMatchSnapshot();
    });
  });
});
