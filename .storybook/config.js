import { addParameters, configure } from '@storybook/vue';
import { themes } from '@storybook/theming';


addParameters({
  options: {
    theme: themes.dark,
  },
});

function loadStories() {
  require('../stories/index.ts');
  // You can require as many stories as you need.
}

configure(loadStories, module);
