import { render } from '@testing-library/react';
import { Avatar } from '../../../src/components/Avatar';

describe('[Avatar Component]', () => {
  describe('[Snapshot]', () => {
    test('Should match snapshot', () => {
      const avatarType = 'circle';
      const avatarSize = 'large';
      const { container } = render(
        <Avatar type={avatarType} size={avatarSize} />,
      );

      expect(container).toMatchSnapshot();
    });

    test('Properties configured on the component should only be available options', () => {
      const sizeOptions = ['small', 'medium', 'large'];
      const typeOptions = ['circle', 'rounded', 'tile'];
      const avatarSize = 'large';
      const avatarType = 'circle';
      const { container } = render(
        <Avatar type={avatarType} size={avatarSize}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMsJNRv8en8a8mnoT_W9D7CjqV55SAPTurg&usqp=CAU"
            alt=""
          />
        </Avatar>,
      );

      expect(new Set(sizeOptions)).toContain(avatarSize);
      expect(new Set(typeOptions)).toContain(avatarType);
      expect(container).toMatchSnapshot();
    });

    test('Should process child properties (img) correctly', () => {
      const avatarType = 'circle';
      const avatarSize = 'large';
      const { container } = render(
        <Avatar type={avatarType} size={avatarSize}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMsJNRv8en8a8mnoT_W9D7CjqV55SAPTurg&usqp=CAU"
            alt=""
          />
        </Avatar>,
      );

      expect(container).toMatchSnapshot();
    });

    test('Should process child properties (text) correctly', () => {
      const avatarType = 'circle';
      const avatarSize = 'large';
      const { container } = render(
        <Avatar type={avatarType} size={avatarSize}>
          <span>JS</span>
        </Avatar>,
      );

      expect(container).toMatchSnapshot();
    });

    test('Should process child properties (size, type) correctly', () => {
      const avatarType = 'rounded';
      const avatarSize = 'small';
      const { container } = render(
        <Avatar type={avatarType} size={avatarSize}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMsJNRv8en8a8mnoT_W9D7CjqV55SAPTurg&usqp=CAU"
            alt=""
          />
        </Avatar>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
