import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it('renders the header', () => {
    render(<Header />);

    const header = screen.getByRole('banner');
    const img = screen.getByAltText('IBGE Logo');

    expect(header).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});
