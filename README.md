# IndexedDB My Admin

## ENV

### Create `.env`
1. Create a empty file `.env`
2. Copy content from `.env.example` to `.env`

### Variables
- `MODE`
  - Values
    - `production` minified files (default)
    - `development` doens't minified files
- `SERVER_PORT`
  - Server port to build in browser
  - Value
    - `9000` (default)
- `STYLEGUIDIST_PORT`
  - Value
    - `9001` (default)


## Scripts

- `test`
  - Test
- `test:coverage`
  - Test coverage
- `test:watch`
  - Test Watch
- `extension:build`
  - Build files to extension
- `extension:watch`
  - Watch and build files to extension

- `browser:build`
  - Simulate the extension in browser
  - Open in browser: http://localhost:9000 *(default in .env.example)*
- `browser:watch`
  - Simulate the extension in browser and watching files
  - Open in browser: http://localhost:9000 *(default in .env.example)*
- `styleguide`
  - "Storybook" of common components
    - Directory common components
      - `src/common/vue/`
    - Open in browser: http://localhost:9001 *(default in .env.example)*

## How to see the extension in my browser?

### Chrome
1. Open the Extension Management page by navigating to `chrome://extensions/`
2. Enable Developer Mode by clicking the toggle switch next to Developer mode
3. Click the **LOAD UNPACKED** button and select the directory `dist/chrome/IndexedDBMyAdmin`

More info: https://developer.chrome.com/extensions/getstarted
