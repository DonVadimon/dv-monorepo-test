import React from 'react';
import { Meta, Story } from '@storybook/react';

import TestComponent from './TestComponent';
import { ITestComponentProps } from './TestComponent.types';

export default {
    title: 'Test/Component',
    component: TestComponent,
    argTypes: {
        theme: {
            options: ['light', 'dark'],
            control: { type: 'radio' },
        },
    },
} as Meta;

export const LightTheme: Story<ITestComponentProps> = (args) => <TestComponent {...args} />;

export const DarkTheme: Story<ITestComponentProps> = (args) => <TestComponent {...args} />;
DarkTheme.args = {
    theme: 'dark',
};
