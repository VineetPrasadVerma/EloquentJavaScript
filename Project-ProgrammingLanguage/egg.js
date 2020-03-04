function parseExpression (program) {
  program = skipSpace(program)
  let match, expr
  if (match = /^"([^"]*)"/.exec(program)) {
    expr = { type: 'value', value: match[1] }
  } else if (match = /^\d+\b/.exec(program)) {
    expr = { type: 'value', value: Number(match[0]) }
  } else if (match = /^[^\s(),#"]+/.exec(program)) {
    expr = { type: 'word', name: match[0] }
  } else {
    throw new SyntaxError('Unexpected syntax: ' + program)
  }

  return parseApply(expr, program.slice(match[0].length))
}

// function skipSpace (string) {
//   const first = string.search(/\S/)
//   if (first === -1) return ''
//   return string.slice(first)
// }

function parseApply (expr, program) {
  program = skipSpace(program)
  if (program[0] !== '(') {
    return { expr: expr, rest: program }
  }

  program = skipSpace(program.slice(1))
  expr = { type: 'apply', operator: expr, args: [] }
  while (program[0] !== ')') {
    const arg = parseExpression(program)
    expr.args.push(arg.expr)
    program = skipSpace(arg.rest)
    if (program[0] === ',') {
      program = skipSpace(program.slice(1))
    } else if (program[0] !== ')') {
      throw new SyntaxError("Expected ',' or ')'")
    }
  }
  return parseApply(expr, program.slice(1))
}

function parse (program) {
  const { expr, rest } = parseExpression(program)
  if (skipSpace(rest).length > 0) {
    throw new SyntaxError('Unexpected text after program')
  }
  return expr
}

console.log(parse('+(a, 10)'))
// → {type: "apply",
//    operator: {type: "word", name: "+"},
//    args: [{type: "word", name: "a"},
//           {type: "value", value: 10}]}

var specialForms = Object.create(null)

function evaluate (expr, scope) {
  if (expr.type === 'value') {
    return expr.value
  } else if (expr.type === 'word') {
    if (expr.name in scope) {
      return scope[expr.name]
    } else {
      throw new ReferenceError(
        `Undefined binding: ${expr.name}`)
    }
  } else if (expr.type === 'apply') {
    const { operator, args } = expr
    if (operator.type === 'word' &&
        operator.name in specialForms) {
      return specialForms[operator.name](expr.args, scope)
    } else {
      const op = evaluate(operator, scope)
      if (typeof op === 'function') {
        return op(...args.map(arg => evaluate(arg, scope)))
      } else {
        throw new TypeError('Applying a non-function.')
      }
    }
  }
}

specialForms.if = (args, scope) => {
  if (args.length !== 3) {
    throw new SyntaxError('Wrong number of args to if')
  } else if (evaluate(args[0], scope) !== false) {
    return evaluate(args[1], scope)
  } else {
    return evaluate(args[2], scope)
  }
}

specialForms.while = (args, scope) => {
  if (args.length !== 2) {
    throw new SyntaxError('Wrong number of args to while')
  }
  while (evaluate(args[0], scope) !== false) {
    evaluate(args[1], scope)
  }

  // Since undefined does not exist in Egg, we return false,
  // for lack of a meaningful result.
  return false
}

specialForms.do = (args, scope) => {
  let value = false
  for (const arg of args) {
    value = evaluate(arg, scope)
  }
  return value
}

specialForms.define = (args, scope) => {
  if (args.length !== 2 || args[0].type !== 'word') {
    throw new SyntaxError('Incorrect use of define')
  }
  const value = evaluate(args[1], scope)
  scope[args[0].name] = value
  return value
}

var topScope = Object.create(null)

topScope.true = true
topScope.false = false

for (const op of ['+', '-', '*', '/', '==', '<', '>']) {
  topScope[op] = Function('a, b', `return a ${op} b;`)
}

topScope.print = value => {
  console.log(value)
  return value
}

function run (program) {
  return evaluate(parse(program), Object.create(topScope))
}

run(`
do(define(total, 0),
   define(count, 1),
   while(<(count, 11),
         do(define(total, +(total, count)),
            define(count, +(count, 1)))),
   print(total))
`)

specialForms.fun = (args, scope) => {
  if (!args.length) {
    throw new SyntaxError('Functions need a body')
  }
  const body = args[args.length - 1]
  const params = args.slice(0, args.length - 1).map(expr => {
    if (expr.type !== 'word') {
      throw new SyntaxError('Parameter names must be words')
    }
    return expr.name
  })

  return function () {
    if (arguments.length !== params.length) {
      throw new TypeError('Wrong number of arguments')
    }
    const localScope = Object.create(scope)
    for (let i = 0; i < arguments.length; i++) {
      localScope[params[i]] = arguments[i]
    }
    return evaluate(body, localScope)
  }
}

run(`
do(define(plusOne, fun(a, +(a, 1))),
   print(plusOne(10)))
`)
// → 11

run(`
do(define(pow, fun(base, exp,
     if(==(exp, 0),
        1,
        *(base, pow(base, -(exp, 1)))))),
   print(pow(2, 10)))
`)
// → 1024

// To support array

// Modify these definitions...

topScope.array = (...values) => values

topScope.length = (arr) => arr.length

topScope.element = (arr, idx) => arr[idx]

run(`
do(define(sum, fun(array,
     do(define(i, 0),
        define(sum, 0),
        while(<(i, length(array)),
          do(define(sum, +(sum, element(array, i))),
             define(i, +(i, 1)))),
        sum))),
   print(sum(array(1, 2, 3))))
`)
// → 6

// This is the old skipSpace. Modify it...
function skipSpace (string) {
  const matchedCharacter = string.match(/^(\s|#.*)*/)
  if (matchedCharacter) return string.slice(matchedCharacter[0].length)
}

console.log(parse('# hello\nx'))
// → {type: "word", name: "x"}

console.log(parse('a # one\n   # two\n()'))
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}

// Fixing Scope

specialForms.set = (args, env) => {
  // Your code here.
  if (args.length !== 2 || args[0].type !== 'word') {
    throw new SyntaxError('Variable not defined in any scope')
  }
  const bindingName = args[0].name
  const value = evaluate(args[1], env)

  for (let scope = env; scope; scope = Object.getPrototypeOf(scope)) {
    if (Object.prototype.hasOwnProperty.call(scope, bindingName)) {
      scope[bindingName] = value
      return value
    }
  }
  throw new ReferenceError(`Setting undefined variable ${bindingName}`)
}

run(`
do(define(x, 4),
   define(setx, fun(val, set(x, val))),
   setx(50),
   print(x))
`)
// → 50
run('set(quux, true)')
// → Some kind of ReferenceError
