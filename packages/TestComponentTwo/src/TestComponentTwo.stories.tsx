import React from 'react';
import { Meta, Story } from '@storybook/react';

import TestComponentTwo from './TestComponentTwo';
import { ITestComponentTwoProps } from './TestComponentTwo.types';

export default {
    title: 'Test/ComponentTwo',
    component: TestComponentTwo,
    argTypes: {
        theme: {
            options: ['light', 'dark'],
            control: { type: 'radio' },
        },
    },
} as Meta;

export const LightTheme: Story<ITestComponentTwoProps> = (args) => <TestComponentTwo {...args} />;
LightTheme.args = {
    theme: 'light',
};

export const DarkTheme: Story<ITestComponentTwoProps> = (args) => <TestComponentTwo {...args} />;
