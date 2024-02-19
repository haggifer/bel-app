import React from 'react';
import { render } from '@testing-library/react';
import CircleLoader from './CircleLoader';

describe('CircleLoader Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<CircleLoader />);

    expect(container).toBeInTheDocument();
  });
});
