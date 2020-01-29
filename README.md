# accordionjs
A small modular JavaScript "library"that creates an image accordion.

This is a work in progress, so it's pretty minimal right now.

# Usage
## Importing
```js
import {Accordion} from './accordion.js';
```
## Creating the Accordion
```js
import {Accordion} from './accordion.js';

const images = [
  //array of image URLs
];

const options = {
  buttons = false
};

const accrd = new Accordion(images, options. document.querySelector('.container');
accrd.build();
```

## Options
```
buttons: adds buttons to each element with a background image dimmer.
```

## The HTML
In the demo, I use a simple `div` with the class name of `container`.
```html
<div class="container"></div>
```

## The CSS
The CSS can be found in the JavaScript. You can edit it to your liking. In the future, I plan on making some changes to how everything is styled, especially better support for mobile devices.
