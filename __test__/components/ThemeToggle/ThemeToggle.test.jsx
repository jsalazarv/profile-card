import { fireEvent, screen, render } from '@testing-library/react';
import { ThemeToggle } from '../../../src/components/ThemeToggle';

const root = window.document.documentElement;

describe('[ThemeToggle Component]', () => {
  describe('[Snapshots]', () => {
    test('It should contain the class [toggle]', () => {
      const { container } = render(<ThemeToggle />);

      expect(container.firstChild).toHaveClass('toggle');
      expect(container).toMatchSnapshot();
    });

    test('It should have dark class the first time it loads', () => {
      expect(root).toHaveClass('dark');
    });

    test('It should have light class the first time it clicked', () => {
      render(<ThemeToggle />);

      fireEvent.click(screen.getByRole('checkbox', { name: 'toggleTheme' }));
      expect(root).toHaveClass('light');
    });

    test('It should have light class the second time it clicked', () => {
      render(<ThemeToggle />);

      fireEvent.click(screen.getByRole('checkbox', { name: 'toggleTheme' }));
      fireEvent.click(screen.getByRole('checkbox', { name: 'toggleTheme' }));
      expect(root).toHaveClass('dark');
    });
  });
});
