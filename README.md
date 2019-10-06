# IndexedDB My Admin

## Scripts

- `test`
  - Test
- `test:coverage`
  - Test coverage
- `test:watch`
  - Test Watch
- `extension:prod`
  - Build files minified to extension
- `extension:dev`
  - Build files unminified to extension
- `extension:watch`
  - Watch files and build unminified to extension
- `browser:prod`
  - Simulate an extension and build minified to browser
  - Open in browser: http://localhost:9000
- `browser:dev`
  - Simulate an extension and build unminified to browser
  - Open in browser: http://localhost:9000
- `browser:watch`
  - Simulate an extension, watch files and build minified to browser
  - Open in browser: http://localhost:9000
- `styleguide`
  - "Storybook" of common components
    - Directory common components
      - `src/common/vue/`

## How to see the extension in my browser?

### Chrome
1. Open the Extension Management page by navigating to `chrome://extensions/`
2. Enable Developer Mode by clicking the toggle switch next to Developer mode
3. Click the **LOAD UNPACKED** button and select the directory `dist/chrome/IndexedDBMyAdmin`

More info: https://developer.chrome.com/extensions/getstarted
