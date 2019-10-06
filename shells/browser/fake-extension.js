window.chrome.tabs = {
  query: (options, callback) => callback([{ id: 1 }])
}

window.chrome.devtools = {
  panels: {
    create: (name, param2, file, callback) => callback()
  }
}
