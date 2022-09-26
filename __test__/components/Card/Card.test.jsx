import { render } from '@testing-library/react';
import { Card } from '../../../src/components/Card';

describe('[Card Component]', () => {
  describe('[Snapshots]', () => {
    test('It should represent the default values', () => {
      const { container } = render(<Card />);

      expect(container.firstChild).toHaveClass('card');
      expect(container.firstChild).toHaveClass('rounded-none');
      expect(container).toMatchSnapshot();
    });

    test('It should contain the class [rounded-lg] if the configured prop is [rounded]', () => {
      const cardType = 'rounded';
      const { container } = render(<Card type={cardType} />);

      expect(container.firstChild).toHaveClass('rounded-lg');
      expect(container.firstChild).not.toHaveClass('rounded-none');
      expect(container).toMatchSnapshot();
    });

    test('It should contain the class [rounded-none] if the configured prop is [tile]', () => {
      const cardType = 'tile';
      const { container } = render(<Card type={cardType} />);

      expect(container.firstChild).toHaveClass('rounded-none');
      expect(container.firstChild).not.toHaveClass('rounded-lg');
      expect(container).toMatchSnapshot();
    });

    test('It should contain the class [border-solid border] if the configured prop is [outlined]', () => {
      const { container } = render(<Card outlined />);

      expect(container.firstChild).toHaveClass('border-solid border');
      expect(container).toMatchSnapshot();
    });
  });
});
