import { render } from '@testing-library/react';
import { Footer } from '../../../src/components/Footer';

describe('[Footer Component]', () => {
  describe('[Snapshots]', () => {
    test('Should have the footer class', () => {
      const { container } = render(<Footer />);

      expect(container.firstChild).toHaveClass('footer');
      expect(container).toMatchSnapshot();
    });

    test('Should have the [coded with] text', () => {
      const { container } = render(<Footer phrase="Coded with" />);

      expect(container.firstChild).toHaveTextContent('Coded with');
      expect(container).toMatchSnapshot();
    });
  });
});
