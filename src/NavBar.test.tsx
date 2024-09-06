import { render, screen } from 'test/helper';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('renders a title', async () => {
    render(<NavBar />);

    expect(await screen.getByRole('heading')).toHaveTextContent('Test');
  });
});
