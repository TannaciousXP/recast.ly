# Recast.ly

Task to build YouTube Video player app using [ReactJS](https://reactjs.org/).

by Peter X. Tan

## ReactJS is Interesting in a few key ways

React is "a JavaScript library for building user interfaces," that gives you tools for interacting with the DOM that are cleaner and more performant than with raw JavaScript or jQuery.

React is **declarative**, rather than **imperative**. Imperative code, like raw JavaScript or jQuery, says *how* something ought to occur. Declarative code (HTML being an example) states *what* something ought to be, and hides the *how* away from the developer. Therefore, in React, you write **components** that looks a lot like HTML, and the React library, hidden from you, handles the details of how these components are actually rendered to the DOM.

Think of React components as superpowered HTML tags that:

- Can be given information for how they ought to behave
- Can communicate with each other
- Can be composed, resued and nested together to build small to very large applications

## High-Level Goals

- Understanding the importance, and expereince the benefits of client side libraries by way of building with React
- Learn how to think about web apps as components
- Learn how to transpile code with Babel's command line tool
- Learn popular ES6 features and practice using them
- Gain more experience with larger codebase, containing many modules across a variety of files.
- Continue practicing interctions with a REST API (in this case, the [YouTube Data API](https://developers.google.com/youtube/v3/?hl=en))

## System Requirements

- [Node](https://nodejs.org/en/)

### Installing System Dependencies

```
npm install
npm install -g live-server
npm install -g babel-cli
```

## Project Set Up

Run the following commands in a different terminal window

```
npm run test
live-server
babel . --out-dir compiled --presets=es2015,react --ignore=node_modules,compiled --source-maps inline
```