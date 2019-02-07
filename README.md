# Momentum-Clone

Project that mimics the chrome extension [Momentum](https://momentumdash.com/). It is not intended for distribution of any kind; it is mearly a demonstration of skill using web technologies for potential recruiters.

## Motivation

After reading [this](https://blog.usejournal.com/best-html-css-javascript-practice-chrome-extension-ae4e5e7839e) article by Jungwon Sea, I was interested in making a Chrome Extension; his explanation alone was sufficient to get started. However, I quickly found that I wanted to mock as much of the application as possible, so I decided to add some frameworks to the project to help scale up. Some weeks later, I ended up here. Thank you for taking a look at my project.

## Tech/Frameworks used

Special thanks to the wonderful people that have created all the following technologies. If any packages are included but not mentioned, then they will be in the package.json. :heart:

- [Vue.js](https://vuejs.org/) The Progressive JavaScript Framework
- [Vue CLI 3](https://cli.vuejs.org/): 🛠️ Standard Tooling for Vue.js Development
- [Vue-Cli-Plugin-Browser-Extension](https://www.npmjs.com/package/vue-cli-plugin-browser-extension): Browser extension development plugin for vue-cli 3.x
- [Bulma.io](https://bulma.io) Free, open source CSS framework based on Flexbox
- [FontAwesome](https://fontawesome.com/): Vector icons and social logos
- [Moment.js](https://momentjs.com/): Time parsing module
- [Unsplash.js](https://www.npmjs.com/package/unsplash-js): A universal wrapper for the Unsplash API
- [Axios](https://github.com/axios/axios): Promise based HTTP client for the browser and node.js

## Build Status

## Screenshots

Example screenshots of the application.

### Full Display

![Full Display](https://github.com/ScotteRoberts/Personal-Projects/blob/master/productivity/momentum-clone/screenshots/FullDisplay.png)

## Code Style

Developed in Visual Studio Code with the [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) extension with most of the styling set to "Prettier".

- Linted with Eslint
- Code styled with Prettier

## Features

- Persistent browser storage per Google account
- Random High Quality photos from [Unsplash.com](https://unsplash.com/)
- Todos
- Favorite Links
- Weather
- Quotes
- Daily Focus

### Roadmap Features

- Creating a server to process more complicated requests to speed up User activity.
- Creating a database to securely store user information.
- Secure transfer of information with implementation of JWT or Cookie protected API calls to back-end (server).
- Other content-related features to provide unification of online services.

## Code Example



## Project setup

This project was created using Vue CLI 3 as a starting point and then adding the Vue-Cli-Plugin-Browser-Extension plugin to generate files necessary to develop a Google Chrome extension.

### Vue CLI 3

Please follow the documentation at [Vue CLI 3 Installation](https://cli.vuejs.org/guide/installation.html) to properly install your project.

My .vuerc project configuration:
```json
"Chrome Extension": {
      "useConfigFiles": true,
      "plugins": {
        "@vue/cli-plugin-babel": {},
        "@vue/cli-plugin-pwa": {},
        "@vue/cli-plugin-eslint": {
          "config": "prettier",
          "lintOn": [
            "save"
          ]
        },
        "@vue/cli-plugin-unit-mocha": {},
        "@vue/cli-plugin-e2e-cypress": {}
      },
      "router": true,
      "routerHistoryMode": false,
      "vuex": true,
      "cssPreprocessor": "sass"
    }

```
After the project is finished installing, change directories and run one of the "How To Use" npm commands to begin development.

## How to Use

### Github

1. Zip this project root folder and save from Github
2. Unzip folder and open a code editor (Shell, TextEditor, IDE) of your choice at the root folder
3. Run the following command to get your Node_Modules
```bash
npm install
```
4. Run the following command to begin development)
```bash
npm run extension
```
5. Open Google Chrome
6. Go to: Chrome Settings > More Tools > Extensions
7. Turn on Developer Mode near the top right of the extension page
8. Click "Load Unpacked" near the top left of your listed extensions
9. Select the "dist" folder of the project directory.
10. Click "Select"
11. You should see a new extension appear in your list called "Momentum-Clone"
12. Open and new tab and you have your application running.

### Compiles and minifies with hot-reload for Chrome Web Browser

```bash
npm run extension
```

### Compiles and minifies for production

```bash
npm run build
```

### Lints and fixes files

```bash
npm run lint
```

### Run your unit tests

```bash
npm run test:unit
```

### Run your end-to-end tests

```bash
npm run test:e2e
```

## Contribute

## Credits

Special thanks to the wonderful people that have created all the following technologies. I used parts of these projects as inspiration for my own. All code samples or tutorials that I used, if not mentioned here, are in [acknowledgements.json](https://github.com/ScotteRoberts/Personal-Projects/blob/master/productivity/momentum-clone/src/acknowledgements.json):heart:

- [Infoboard](https://github.com/SixBytesUnder/infoboard/blob/master/.env.example): Infoboard showing photos from local folder as the background, time, weather and Transport for London status updates. Intended for Raspberry Pi, but should work on any machine with NodeJS installed.

## License

MIT &copy; - [ScotteRoberts](https://github.com/ScotteRoberts/)

## Last Updated

December 17, 2018
