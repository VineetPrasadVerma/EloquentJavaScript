const { createServer } = require('http')
createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  request.on('data', chunk =>
    response.write(chunk.toString().toUpperCase()))
  request.on('end', () => response.end())
}).listen(8000)

const data = JSON.stringify({
  todo: 'Buy the milk'
})

const { request } = require('http')
request({
  hostname: 'localhost',
  port: 8000,
  path: '/todos',
  method: 'POST'
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': data.length
//   }
}, response => {
  response.on('data', chunk =>
    process.stdout.write(chunk.toString()))
}).end('Hello server')
// // → HELLO SERVER

// const https = require('https')

// const data = JSON.stringify({
//   todo: 'Buy the milk'
// })

// const options = {
//   hostname: 'flaviocopes.com',
//   port: 443,
//   path: '/todos',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': data.length
//   }
// }

// const req = https.request(options, (res) => {
//   console.log(`statusCode: ${res.statusCode}`)

//   res.on('data', (d) => {
//     process.stdout.write(d)
//   })
// })

// req.on('error', (error) => {
//   console.error(error)
// })

// req.write(data)
// req.end()
