import { render } from '@testing-library/react';
import { Home } from '../../../src/views/Home';
import { ProfileCard } from '../../../src/views/Home/Components/ProfileCard/index.jsx';

jest.mock('../../../src/views/Home/Components/ProfileCard');

describe('[Home view]', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('[Snapshots]', () => {
    test('Should content [home-container] class', () => {
      const { container } = render(<Home />);

      expect(container.firstChild).toHaveClass('home-container');
      expect(container).toMatchSnapshot();
    });

    test('Should content [ProfileCard] component', () => {
      render(<Home />);

      expect(ProfileCard).toHaveBeenCalledOnce();
    });
  });
});
