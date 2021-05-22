import React, { useState } from 'react';
import { TestComponent } from '@dv-monorepo-test/test-component';

import { ITestComponentTwoProps } from './TestComponentTwo.types';

import './TestComponentTwo.css';

const TestComponentTwo: React.FC<ITestComponentTwoProps> = ({ theme = 'dark' }) => {
    const [count, setCount] = useState(0);

    return (
        <div className="test-comp-two">
            <TestComponent theme={theme} />
            <div className="counter-container">
                <div className="count">{count}</div>
                <div className="counter-btns">
                    <button type="button" onClick={() => setCount((prev) => prev - 1)} className="dec">
                        -
                    </button>
                    <button type="button" onClick={() => setCount((prev) => prev + 1)} className="inc">
                        +
                    </button>
                </div>
            </div>
            <h1>Changes for changes</h1>
        </div>
    );
};

export default TestComponentTwo;
