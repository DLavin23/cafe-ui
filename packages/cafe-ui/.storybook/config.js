import React from 'react'
import { addDecorator, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'

addDecorator(withKnobs);
addDecorator(withA11y)

addDecorator(story => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.js$/), module);
