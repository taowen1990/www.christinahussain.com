# Christina's Website
[![CircleCI](https://circleci.com/gh/evantahler/www.christinahussain.com.svg?style=svg)](https://circleci.com/gh/evantahler/www.christinahussain.com)

Running the command will tell you how to look at the site on your computer

I am an isomorphic React + Next.JS project.

## Install
This is a [React Project](https://facebook.github.io/react/) utilizing [next.js](https://github.com/zeit/next.js/) and [react-bootstrap](https://react-bootstrap.github.io/)

* You can run a local server with `npm run dev`
  * You will need homebrew (https://brew.sh/)
  * You will need node.js installed (`brew install node`)

Then:
- `npm install`

## Running in Development (on your laptop)
- `npm run dev`

## Testing like the server does
- `npm test`

## Building for Production

The master branch of this repository is automatically deployed to github pages by circle.ci when the build is green

## Linting

We use [standard.js](https://standardjs.com) to manage our lint rules.  We run `standard` as part of our test suite, and your contributions must pass.  Standard is *very* opinionated and inflexible such that we cannot inject our own opinions.  There are no eslint/jshint files to manage in this project.  

## CSS
- we use a default boostrap CSS file
- all components provide thier own CSS inline
