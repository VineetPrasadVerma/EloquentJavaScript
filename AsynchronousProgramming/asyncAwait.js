const userLeft = false
const userWatchingCateMeme = true

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

async function doWork () {
  try {
    const val = await watchTutorialPromise()
    console.log(val)
    // return Promise.resolve('Hello')
  } catch (err) {
    // console.log('Vine')
    console.log(err)
    return Promise.reject('Error')
  }
}

doWork().then((value) => console.log(value)).catch((message) => console.log(message))
