// Your code here (and the code from the previous exercise)
class Group {
  // Your code here.
  constructor () {
    this.group = []
  }

  adds (value) {
    if (!this.group.includes(value)) {
      this.group.push(value)
    }
  }

  delete (value) {
    // let idx = this.group.indexOf(value);
    // if(idx !== -1){
    //     this.
    // }
    this.group = this.group.filter(val => val !== value)
  }

  has (value) {
    return this.group.includes(value)
  }

  static from (iterableObj) {
    const group = new Group()
    for (const ele of iterableObj) {
      group.adds(ele)
    }
    return group
  }

  [Symbol.iterator] () {
    return new GroupIterator(this)
  }
}

class GroupIterator {
  constructor (group) {
    this.group = group
    // console.log(this.group)
    this.position = 0
  }

  next () {
    if (this.position >= this.group.group.length) {
      return { done: true }
    } else {
      const result = { value: this.group.group[this.position], done: false }
      this.position++
      return result
    }
  }
}

for (const value of Group.from(['a', 'b', 'c'])) {
  console.log(value)
}
// → a
// → b
// → c
