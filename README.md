# Reproducing the bug

So the bug reported in https://github.com/facebook/react/issues/25656 is that React does not pass an error when a functional component hook is called inside of a class component
in a specific situation, that is using it inside of a render function that returns a component that expects a function as a child, with the child function inlined and having the
hook inside of said function.

That was confusing as hell I know... But if you go into src/TestComponent.js you will see what I mean, inside I also commented some example jsx that includes a functional hook which WILL
return an error as expected, but the one that is initially not commented out will not even give an error on the screen or browser console.

## Available Scripts

In the project directory, you can run:

### `npm start`