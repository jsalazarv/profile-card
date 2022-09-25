import { render } from '@testing-library/react';
import { Avatar } from '../../../src/components/Avatar';

describe('[Snapshot]', () => {
  test('Should match snapshot', () => {
    const typeAvatar = 'circle';
    const sizeAvatar = 'large';
    const { container } = render(
      <Avatar type={typeAvatar} size={sizeAvatar} />,
    );

    expect(container).toMatchSnapshot();
  });
});
