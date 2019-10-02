import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import Box from '.';

const stories = storiesOf('Box', module);

stories.add('Box', () => (
  <Box bg='green' color={text('Color', 'white')} p={number('Padding', 4)} >
    {text('Label', 'Hello Storybook')}
  </Box>
));
