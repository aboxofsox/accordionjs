# accordionjs
A small modular JavaScript "library"that creates an image accordion.

This is a work in progress, so it's pretty minimal right now.

# Usage
## Extracting
Simply extra the contents of the .zip folder somewhere in your main project folder. The repo comes with an `index.html`, but you don't have to use it. If you happen to move the contents of the zipped folder, be wary of where `accordion.js` is. That's the main bread and butter.
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

## Image Requirements
This was only tested with landscape-oriented images. It'll for sure work with portrait images, but you would need to adjust the width and height of your container. 

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

## Demo
![demo](https://github.com/aboxofsox/accordionjs/blob/master/ezgif.com-video-to-gif.gif)
