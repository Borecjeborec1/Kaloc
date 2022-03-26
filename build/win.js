const { compile } = require('nexe')

compile({
  input: '../dist/index.js',
  output: './app/kaloc',
  target: "win32-x86-10.13.0",
}).then(() => {
  console.log('success')
})