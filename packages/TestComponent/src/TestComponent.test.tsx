import React from 'react';
import { render } from '@testing-library/react';

import TestComponent from './TestComponent';
import { ITestComponentProps } from './TestComponent.types';

describe('Test Component', () => {
    const renderComponent = (props?: ITestComponentProps) => render(<TestComponent {...props} />);

    it('should have light className with default props', () => {
        const { getByTestId } = renderComponent();

        const testComponent = getByTestId('test-component');

        expect(testComponent).toHaveClass('test-component-light');
    });

    it('should have dark className with theme set as dark', () => {
        const { getByTestId } = renderComponent({ theme: 'dark' });

        const testComponent = getByTestId('test-component');

        expect(testComponent).toHaveClass('test-component-dark');
    });
});
