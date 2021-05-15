import React from 'react';

import { ITestComponentProps } from './TestComponent.types';

import './TestComponent.css';

const TestComponent: React.FC<ITestComponentProps> = ({ theme = 'light' }) => (
    <div className={['test-component', `test-component-${theme}`].join(' ')} data-testid="test-component">
        <h1>Test component</h1>
        <h2>Work pls</h2>
    </div>
);

export default TestComponent;
