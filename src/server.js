const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
  })

  const plugin = [
    require('@hapi/vision'),
    require('@hapi/inert')
  ]
  
  await server.register(plugin)

  server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: 'templates',
    layoutPath: './templates/layout',
    layout: true,
    partialsPath: './templates/partials'
  })

  server.route(routes)

  await server.start()
  console.log('Server berjalan pada port: %s', server.info.uri)
}

module.exports = init