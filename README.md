# Angular + Webpack + React

## Features

* standard implementation of a state using `ui-router`
* component implementation used as inline template in `ui-router` state definition
* ES6, Webpack
* Lazy load file js by router (feature) using `Code splitting` webpack
* Render by Reactjs (reduce total wathchers and faster)

## Why use Webpack

* Config simple only require `webpack`, webpack has a rich plugin interface. Most of the features are internal plugins using this interface. This makes webpack very flexible.

* Webpack supports pre-processing files via loaders. This allows you to bundle any static resource not only javascript. You can easily write your own loaders running in node.js.

* `CODE SPLITTING` our code into modules. It is useful for organizing a large application. Code Splitting can be used to split code into an on demand loaded. Reduce time load. Combine with Angularjs use technique `LazyLoad` feature. This is a important feature of Webpack.

* Webpack supports plugin  automatic reloading  developent enviroment like `live-reload`, `browser-sync`.

* Webpack supports AMD and CommonJs module styles. It performs clever static analysis on the AST of your code. It even has an evaluation engine to evaluate simple expressions. This allows you to support most existing libraries.

* Webpack can do many optimizations to reduce the output size (js, css, ...). It also cares about request caching by using hashes.

## Installation

To use it, just clone this repo and install the npm dependencies:
* $ npm install


## Scripts build:

* `npm run dev` - start development server, try it by opening `http://localhost:8080/`
* `npm run build` - generate a minified build to dist folder, to build production

