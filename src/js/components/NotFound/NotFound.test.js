import React from 'react'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import NotFound from './NotFound'

test('renders component', async () => {
    const { getByText } = render(<NotFound />)
    expect(getByText('404')).toBeInTheDocument()
})