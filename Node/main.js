const { reverse } = require('./reverse')
// const ini = require('./node_modules/ini')
const fileSystem = require('fs')

console.log(reverse('vineet'))
// ini.parse()
fileSystem.readFile('package.json', 'utf-8', (err, txt) => {
  if (err) console.log(err)
  else console.log(txt)
})

fileSystem.writeFile('vineet.txt', 'I am Vineet Verma', (err, txt) => {
  if (err) console.log(err)
  else console.log('File Written')
})

fileSystem.stat('./vineet.txt', (err, stat) => {
  if (err) console.log(err)
  else console.log(stat)
})
