const box = {
  locked: true,
  unlock () {
    this.locked = false
  },
  lock () {
    this.locked = true
  },
  _content: [],
  get content () {
    if (this.locked) throw new Error('Locked!')
    return this._content
  }
}

function withBoxUnlocked (body) {
  // Your code here.
  const locked = box.locked
  if (locked) {
    try {
      box.unlock()
      return body()
    } finally {
      box.lock()
    }
  }

  return body()
}

withBoxUnlocked(function () {
  box.content.push('gold piece')
})

try {
  withBoxUnlocked(function () {
    throw new Error('Pirates on the horizon! Abort!')
  })
} catch (e) {
  console.log('Error raised: ' + e)
}
// console.log(box.content)
console.log(box.locked)
// → true
