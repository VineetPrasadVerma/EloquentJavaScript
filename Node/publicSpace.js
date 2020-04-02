const { createServer } = require('http')
const { readdirSync } = require('fs')
const server = createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.write(`
    <h1>Hello!</h1>
    <p>You asked for <code>${request.url}</code></p>
    <li><code>${readdirSync('../Node', 'utf-8')}</code></li>`)
  response.end()
})
server.listen(8000)
console.log('Listening! (port 8000)')

// const { readdirSync } = require('fs')
// // const div = document.getElementById('filename')
// for (const file of readdirSync('../Node', 'utf-8')) {
// //   div.appendChild(document.createTextNode(file))
//   process.stdout.write(file)
// }
