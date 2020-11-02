module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: 70,
          // ie: 11
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining'
  ]
}



