import type { Meta as IMeta, StoryObj as IStoryObj } from '@storybook/react';
import Button from '../Button.component';

type IStory = IStoryObj<typeof Button>;

const meta: IMeta<typeof Button> = {
    title: 'Base/Button',
    component: Button,
};

export default meta;

export const DefaultButton: IStory = {
    args: {
        title: 'My Button',
    },
};

export const DisabledButton: IStory = {
    args: {
        ...DefaultButton.args,
        isDisabled: true,
    },
};
