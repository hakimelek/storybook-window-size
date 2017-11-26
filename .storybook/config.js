import React from 'react'
import { configure } from '@storybook/react'
import ScreenDimensions from '../dist/ScreenDimensions.js'
import { addDecorator } from '@storybook/react'

addDecorator(story => (
  <ScreenDimensions>
    {story()}
  </ScreenDimensions>
))

function loadStories() {
  require('./stories/index.js')
}

configure(loadStories, module)
