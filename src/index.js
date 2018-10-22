import 'babel-polyfill'
import gpapi from 'stack-pack-gpapi'
import express from './express'
import winston from 'winston'
import util from 'util'

winston.info('---------------------------')
;(async () => {
  try {
    // Starts an HTTPS express server
    const app = await express.start()

    // Performs the security handshake with the GP-API.
    await gpapi.handshake({
      app,
      apiUrl: process.env.GP_API_URL,
      keyPublic: process.env.GP_API_PUBLIC,
      keyPrivate: process.env.GP_API_SECRET
    })
  } catch (inner) {
    const err = new Error(`An error occurred whilst starting the ${process.env.API_NAME} API`)
    err.inner = inner
    winston.error(util.inspect(err))
  }
})()
