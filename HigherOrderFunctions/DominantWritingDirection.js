function dominantDirection(text) {
  // Your code here.
  const counted = countBy(text, char => {
    const script = characterScript(char.codePointAt(0))
    return script ? script.direction : 'none'
  }).filter(({ name }) => name !== 'none')

  if (counted.length === 0) {
    return 'ltr'
  }

  return counted.reduce((a, b) => (a.count < b.count ? b : a)).name
}

function characterScript(code) {
  for (const script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to
      })
    ) {
      return script
    }
  }
  return null
}

function countBy(items, groupName) {
  const counts = []
  for (const item of items) {
    const name = groupName(item)
    const known = counts.findIndex(c => c.name === name)
    if (known === -1) {
      counts.push({ name, count: 1 })
    } else {
      counts[known].count++
    }
  }
  return counts
}

console.log(dominantDirection('Hello!'))
// → ltr
console.log(dominantDirection('Hey, مساء الخير'))
// → rtl
