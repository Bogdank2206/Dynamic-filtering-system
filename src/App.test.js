import App from './App';
import {render, screen} from '@testing-library/react';
import React from 'react';
import {act} from 'react';

test('Render without crashing', async () => {
    await act(() => {
        render(<App/>);
    });
    expect(screen.getByText(/Header/i)).toBeInTheDocument();
});