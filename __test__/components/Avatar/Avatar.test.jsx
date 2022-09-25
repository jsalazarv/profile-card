import { render } from '@testing-library/react';
import { Avatar } from '../../../src/components/Avatar';

describe('[Avatar Component]', () => {
  describe('[Snapshot]', () => {
    test('It should represent the default values', () => {
      const { container } = render(<Avatar />);

      expect(container.firstChild).toHaveClass('rounded-full');
      expect(container.firstChild).toHaveClass('w-6 h-6');
      expect(container.firstChild).toHaveClass('transparent');
      expect(container).toMatchSnapshot();
    });

    test('It should contain the class [rounded-full] if the configured prop is [circle]', () => {
      const avatarType = 'circle';
      const { container } = render(<Avatar type={avatarType} />);

      expect(container.firstChild).toHaveClass('rounded-full');
      expect(container.firstChild).not.toHaveClass('rounded-lg');
      expect(container.firstChild).not.toHaveClass('rounded-none');
      expect(container).toMatchSnapshot();
    });

    test('It should contain the class [rounded-lg] if the configured prop is [rounded]', () => {
      const avatarType = 'rounded';
      const { container } = render(<Avatar type={avatarType} />);

      expect(container.firstChild).toHaveClass('rounded-lg');
      expect(container.firstChild).not.toHaveClass('rounded-full');
      expect(container.firstChild).not.toHaveClass('rounded-none');
      expect(container).toMatchSnapshot();
    });

    test('It should contain the class [rounded-none] if the configured prop is [tile]', () => {
      const avatarType = 'tile';
      const { container } = render(<Avatar type={avatarType} />);

      expect(container.firstChild).toHaveClass('rounded-none');
      expect(container.firstChild).not.toHaveClass('rounded-full');
      expect(container.firstChild).not.toHaveClass('rounded-lg');
      expect(container).toMatchSnapshot();
    });

    test('It should contain the classes [w-6 h-6] if the configured prop is [small]', () => {
      const avatarSize = 'small';
      const { container } = render(<Avatar size={avatarSize} />);

      expect(container.firstChild).toHaveClass('w-6 h-6');
      expect(container.firstChild).not.toHaveClass('w-16 h-16');
      expect(container.firstChild).not.toHaveClass('w-32 h-32');
    });

    test('It should contain the classes [w-16 h-16] if the configured prop is [medium]', () => {
      const avatarSize = 'medium';
      const { container } = render(<Avatar size={avatarSize} />);

      expect(container.firstChild).toHaveClass('w-16 h-16');
      expect(container.firstChild).not.toHaveClass('w-6 h-6');
      expect(container.firstChild).not.toHaveClass('w-32 h-32');
    });

    test('It should contain the classes [w-32 h-32] if the configured prop is [large]', () => {
      const avatarSize = 'large';
      const { container } = render(<Avatar size={avatarSize} />);

      expect(container.firstChild).toHaveClass('w-32 h-32');
      expect(container.firstChild).not.toHaveClass('w-6 h-6');
      expect(container.firstChild).not.toHaveClass('w-16 h-16');
    });

    test('Should render an image as child component', () => {
      const { getByTestId } = render(
        <Avatar>
          <img
            data-testid="image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMsJNRv8en8a8mnoT_W9D7CjqV55SAPTurg&usqp=CAU"
            alt=""
          />
        </Avatar>,
      );
      const img = getByTestId('image');

      expect(img).toBeInTheDocument();
    });
  });
});
