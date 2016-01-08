Chatterbox client
==============

This is a project I completed as a student at Hack Reactor. This project is a result of pair programming. During the project we built a chat client consuming data from a parse API. The final client app has been refactored with various libraries/frameworks, including  jQuery and Backbone.

## Structure:

The repository consist of

- jQuery app
- backbone app
- test Spec files

#### Chatterbox app - using jQuery

The app allows the user to chose rooms and fetch/post messages from and to a parse based API backend.

## Install:

The project relies on bower for managing external libraries and dependencies, so before running you will need to:

`bower install`

then to run it, simply open `./client/index.html` with your browser.

Make sure to have a valid config.js inside the env folder.

### SpecRunner - mocha

The specrunner contain both the tests for the client

### Testing

Tests are made with the [Mocha](https://github.com/mochajs/mocha) testing framework.
Test are located in the ./spec directory. To run the Just open the spec runner file with chrome.

```
SpecRunner.html
```
