# storybook-window-size

A storybook addon that display the window size on the right bottom corner.

<p align="center"><img src="https://file-yyzlpeuetk.now.sh/" width=700 alt="storybook-window-size"></p>


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