module.exports = {
  "env": {
    // Production
    "production": {
      "presets": [
        [
          "@babel/preset-env",
          {
            "targets": {
              "chrome": 70,
            },
          },
        ]
      ],
    },

    // Development
    "development": {
      "presets": [
        [
          "@babel/preset-env",
          {
            "targets": {
              "chrome": 70,
            },
          },
        ]
      ],
    },

    // Test
    "test": {
      "presets": [
        [
          "@babel/preset-env",
          {
            "targets": {
              "chrome": 70,
            },
          },
        ]
      ],
    },
  }
}



