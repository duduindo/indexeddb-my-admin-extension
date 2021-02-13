const Bundler = require('parcel-bundler');
const Path = require('path');


// Single entrypoint file location:
const entryFiles = [
  // PUG
  Path.join(__dirname, '../src/resources/views/popup.pug'),

  // TypeScript
  Path.join(__dirname, '../src/resources/assets/content.ts'),

];


// Bundler options
const options = {
  outDir: './dist',
  //outFile: 'index.html',
  publicUrl: '/',
  watch: !true,
  cache: !true,
  cacheDir: '.cache',
  contentHash: false,
  global: 'moduleName',
  minify: false,
  // scopeHoist: false,
  target: 'browser',
  // bundleNodeModules: false,
  // https: {
  //   cert: './ssl/c.crt',
  //   key: './ssl/k.key'
  // },
  // logLevel: 3,
  // hmr: true,
  // hmrPort: 0,
  sourceMaps: !true,
  // hmrHostname: '',
  // detailedReport: false,
  // autoInstall: true,
};

(async function() {
  // Initializes a bundler using the entrypoint location and options provided
  const bundler = new Bundler(entryFiles, options);

  // Run the bundler, this returns the main bundle
  // Use the events if you're using watch mode as this promise will only trigger once and not for every rebuild
  const bundle = await bundler.bundle();
})();
