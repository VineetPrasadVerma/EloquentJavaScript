const { readFileSync, readdirSync, statSync } = require('fs')

const regex = new RegExp(process.argv[2])

for (let i = 3; i < process.argv.length; i++) {
//   console.log(process.argv[i])
  searchTool(process.argv[i])
}

function searchTool (name) {
  if (statSync(name).isDirectory) {
    for (const fileName of readdirSync(name)) {
      searchTool(name + '/' + fileName)
    }
  } else {
    if (regex.test(readFileSync(name, 'utf-8'))) {
      console.log(name)
    }
  }
}
