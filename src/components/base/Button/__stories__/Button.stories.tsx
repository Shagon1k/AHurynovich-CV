import { ComponentStory } from '@storybook/react';

import { STORY_TITLE } from './Button.stories.constants';
import Button from '../Button.component';

export default {
    title: STORY_TITLE,
    component: Button,
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
    title: 'My Button',
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
    ...DefaultButton.args,
    disabled: true,
};
