function canYouSpotTheDiffernce () {
  'use strict'
  for (let counter = 0; counter < 3; counter++) {
    console.log(counter)
  }
}

// canYouSpotTheDiffernce()

// function test (label, body) {
//   if (!body()) console.log(`Failed: ${label}`)
// }

// test('convert Latin text to uppercase', () => {
//   return 'hello'.toUpperCase() === 'HELLO'
// })
// test('convert Greek text to uppercase', () => {
//   return 'Χαίρετε'.toUpperCase() === 'ΧΑΊΡΕΤΕ'
// })
// test("don't convert case-less characters", () => {
//   return 'مرحبا'.toUpperCase() === 'مرحبا'
// })

function numberToString (n, base = 10) {
  let result = ''
  let sign = ''
  if (n < 0) {
    sign = '-'
    n = -n
  }
  do {
    result = String(n % base) + result
    n /= base
  } while (n > 0)
  return sign + result
}
console.log(numberToString(13, 10))
