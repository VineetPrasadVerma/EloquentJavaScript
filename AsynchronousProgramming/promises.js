// const p = new Promise((resolve, reject) => {
//   const a = 1 + 1
//   if (a === 2) {
//     resolve('success')
//   } else {
//     reject('failed')
//   }
// })

// p.then((message) => console.log(`This is inside then ${message}`))
//   . catch((message) => console.log(`This is inside then ${message}`))

const userLeft = false
const userWatchingCateMeme = false

function watchTutorialPromise () {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left',
        message: ':)'
      })
    } else if (userWatchingCateMeme) {
      reject({
        name: 'User watching cat meme',
        message: ':('
      })
    } else {
      resolve('Thumbs and Subscribe')
    }
  })
}

watchTutorialPromise().then((message) => { console.log(message) })
  .catch((err) => { console.log(err.name) })

// const recordVideoOne = new Promise((resolve, reject) => {
//   resolve('Video 1 recorded')
// })

// const recordVideoTwo = new Promise((resolve, reject) => {
//   reject('Video 2 recorded')
// })

// const recordVideoThree = new Promise((resolve, reject) => {
//   resolve('Video 3 recorded')
// })

// Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree])
//   . then(messages => console.log(messages))
//   .catch(message => console.log(message))

// const p = new Promise((resolve, reject) => {
//   const a = 1 + 1
//   //   console.log('fdf')
//   //   throw new Error('VIN')
//   const b = () => { return a }
//   if (a === 2) {
//     resolve(b)
//   } else {
//     reject(new Error('Vn'))
//   }
// })

// p.then((res) => console.log(res()), (rej) => console.log(rej))
