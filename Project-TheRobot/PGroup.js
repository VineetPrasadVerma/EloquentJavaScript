class PGroup {
  constructor (members) {
    this.members = members
  }

  add (element) {
    if (!this.has(element)) {
      return new PGroup(this.members.concat(element))
    }
  }

  delete (element) {
    if (!this.has(element)) return this
    return new PGroup(this.members.filter(ele => ele !== element))
  }

  has (element) {
    return this.members.includes(element)
  }
}

PGroup.empty = new PGroup([])

const a = PGroup.empty.add('a')
const ab = a.add('b')
const b = ab.delete('a')

console.log(b.has('b'))
// → true
console.log(a.has('b'))
// → false
console.log(b.has('a'))
// → false
console.log(a, ab, b)
