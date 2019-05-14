module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: 70,
        },
      },
    ]
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-private-methods"
  ]
}



