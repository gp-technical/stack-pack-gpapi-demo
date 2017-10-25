#!/usr/bin/env node
const { exec } = require('child_process')
console.log()

swap()

function swap (dir) {
  const path = __dirname
  if (dir) path += `/${dir}`
  const target = process.argv[2]
  exec(`sp-swap ${path} ${target}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    console.log(`${stdout}`)
    if (stderr) console.log(`${stdout}`)
  })
}
