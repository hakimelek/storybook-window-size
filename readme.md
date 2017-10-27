# storybook-window-size

A storybook addon that display the window size on the right bottom corner.

## Install

```
$ npm install storybook-window-size
```

## Usage

On your storybo
ok `config.js` file, usually under `./storybook`, add the following.

```js
import ScreenDimensions from 'storybook-window-size'
import { addDecorator } from '@storybook/react'

addDecorator(story => (
  <ScreenDimensions>
    {story()}
  </ScreenDimensions>
))

```


## License

MIT © [Malek Hakim](http://malekhakim.me )