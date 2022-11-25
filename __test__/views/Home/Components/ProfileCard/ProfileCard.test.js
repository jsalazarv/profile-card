import { render } from '@testing-library/react';
import { ProfileCard } from '../../../../../src/views/Home/Components/ProfileCard';
import { Avatar } from '../../../../../src/components/Avatar';

jest.mock('../../../../../src/components/Avatar');

describe('[ProfileCard Component]', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should content [profile-card] class', () => {
    const { container } = render(<ProfileCard />);

    expect(container.firstChild).toHaveClass('profile-card');
    expect(container).toMatchSnapshot();
  });

  test('Should content [Avatar] component', () => {
    render(<ProfileCard />);

    expect(Avatar).toHaveBeenCalledOnce();
  });
});
