# Virtual Pet JavaScript

This project demonstrates how to mimic a modular environment with testing capabilities. Frameworks like React will come out of the box with the testing and transpiling tools needed to create modular components that can be tested. Without a framework we are using the following tools:

- [Node](https://nodejs.org/en/)
- [Parcel](https://parceljs.org/)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/)

## Getting Started

To get started `clone` this repository and run `npm install` . Be sure you have `node` already installed on your machine. You can check this in your terminal by running the command `node -v`

## Want to set up this project from scratch?

Not wanting to clone, but want to practice the set up of the environment yourself? The following steps will allow you to set up this project from scratch

- `mkdir virtual-pet-js`
- `npm init -y` to set up a `package.json` file and accept the default settings
- `npm i --save-dev parcel jest babel-jest @babel/core @babel/preset-env` to install Parcel, Jest and Babel
- create a `.babelrc` file and add the following snippet to this file:
  ```
     {
        "presets": ["@babel/preset-env"]
    }
  ```
- Edit the `scripts` in your `package.json` file to read as

  ```
    {
        "scripts": {
            "start": "parcel index.html",
            "build": "parcel build index.html",
            "test": "jest --watchAll"
        }
    }
  ```

- Create a [gitignore file at gitignore.io](https://www.toptal.com/developers/gitignore)
  - add Node and VisualStudioCode to this gitignore and bring into the project

## Interacting with this application

- `npm test` will run the tests
- `npm start` will run the application

Credits given to this source: [Using Jest with Parcel Bundler](https://ryankubik.com/blog/parcel-and-jest)
