import gpapi from 'stack-pack-gpapi'
import bodyParser from 'body-parser'
import winston from 'winston'
import server from 'express'
import util from 'util'

const start = async () => {
  try {
    const app = server()
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(server.static(__dirname))

    app.get('/', (req, res) => {
      res.sendFile(path.resolve('index.html'))
    })

    app.get('/ping', (req, res) => {
      res.send(`The ${process.env.API_NAME} api is running : ${new Date().toLocaleString('en-GB')}`)
    })

    app.get('/gp/subscription/:url', async (req, res) => {
      res.json(await gpapi.get(`subscription/url/${req.params.url}`))
    })

    app.get('/gp/:contentmodelid/primary-folders', async (req, res) => {
      res.json(await gpapi.get(`location/contentmodel/${req.params.contentmodelid}/primary-folders`))
    })

    app.get('/gp/folder/:folderId', async (req, res) => {
      res.json(await gpapi.get(`location/parent-folder/${req.params.folderId}/child-folders`))
    })

    app.get('/gp/:folderId/items', async (req, res) => {
      res.json(await gpapi.get(`folder/${req.params.folderId}/items/simple`))
    })

    app.get('/gp/content/:type/:id', async (req, res) => {
      res.json(await gpapi.get(`contentitem/${req.params.type}/${req.params.id}`))
    })
    app.get('/gp/contentmodel/:id/search', async (req, res) => {
      res.json(await gpapi.get(`contentmodel/${req.params.id}/search?terms=${req.query.terms}`))
    })
    await app.listen(process.env.API_PORT)
    winston.info(`Express server started. The ${process.env.API_NAME} API is listening at ${process.env.API_ROOT}`)

    return app
  } catch (inner) {
    const err = new Error('An error occurred while starting the Express TLS Server')
    err.inner = inner
    winston.error(util.inspect(err))
  }
}

export default { start}
