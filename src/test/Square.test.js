import React from 'react';
import { render } from '@testing-library/react';
import Square from '../components/Square';

describe('Square Component', () => {
  it('should render the initial value', () => {
    const { getByText } = render(<Square value='X' />);

    expect(getByText('X')).toBeInTheDocument();
  });
});
