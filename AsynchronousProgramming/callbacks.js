// function first () {
//   // Simulate a code delay
//   setTimeout(function () {
//     console.log(1)
//   }, 500)
// }
// function second () {
//   console.log(2)
// }
// first()
// second()

const a = 1
const b = 2

setTimeout(() => {
  console.log('asynchronous')
}, 1000)

console.log('Synchronous')
console.log(a)
console.log(b)

function doHomework (subject, callback) {
  console.log(`Starting my ${subject} homework.`)
  callback()
  setTimeout(() => {
    console.log('Vineet')
  }, 1000)
}

doHomework('math', function () {
  console.log('Finished my homework')
})
