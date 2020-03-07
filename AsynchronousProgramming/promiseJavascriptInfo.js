<!-- // SingerExample
// A promise is a special JavaScript object that links the “producing code” and the “consuming code” together.
// In terms of our analogy: this is the “subscription list”. The “producing code” takes whatever time it needs
// to produce the promised result,and the “promise” makes that result available
// to all of the subscribed code when it’s ready.

// let promise = new Promise(function (resolve, reject) {
//   // the function is executed automatically when the promise is constructed

//   // after 1 second signal that the job is done with the result "done"
//   setTimeout(() => resolve('done'), 1000)
// })

// promise = new Promise(function (resolve, reject) {
//   // after 1 second signal that the job is finished with an error
//   setTimeout(() => reject(new Error('Whoops!')), 1000)
// })

// promise = new Promise(function (resolve, reject) {
//   resolve('done')

//   reject(new Error('…')) // ignored
//   setTimeout(() => resolve('…')) // ignored
// })

const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('done!')
    console.log('test1')
  }, 1000)
  console.log('test2')
})

// resolve runs the first function in .then
promise.then(
  result => {
    console.log(result)
    console.log('test3')
  }
).catch(err => console.log(err))

console.log('test4') 

// <!-- <script>
// function loadScript (src, callback) {
//   const script = document.createElement('script')
//   script.src = src

//   script.onload = () => callback(null, script)
//   script.onerror = () => callback(new Error(`Script load error for ${src}`))

//   document.head.append(script)
// }

// function loadScript(src) {
//     return new Promise(function(resolve, reject) {
//       let script = document.createElement('script')
//       script.src = src
  
//       script.onload = () => resolve(script)
//       script.onerror = () => reject(new Error(`Script load error for ${src}`))
  
//       document.head.append(script)
//     })
// }

// let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js")

// promise.then(
//   script => alert`${script.src} is loaded!`),
//   error => alert(`Error: ${error.message}`)
// console.table(promise)
// promise.finally(console.log(promise)).then(script => alert('Another handler...')).catch(rej => console.log(rej))
// // console.table(promise)
// </script> -->
