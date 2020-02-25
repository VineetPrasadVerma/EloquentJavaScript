function countSteps (state, robot, memory) {
  for (let steps = 0; ; steps++) {
    if (state.parcels.length === 0) return steps
    const action = robot(state, memory)
    state = state.move(action.direction)
    memory = action.memory
  }
}
function compareRobots (robot1, memory1, robot2, memory2) {
  // Your code here
  let total1 = 0
  let total2 = 0
  for (let i = 0; i < 100; i++) {
    const state = VillageState.random()
    total1 += countSteps(state, robot1, memory1)
    total2 += countSteps(state, robot2, memory2)
  }
  console.log(`Robot 1 takes ${total1 / 100} steps`)
  console.log(`Robot 2 takes ${total2 / 100} steps`)
}

compareRobots(routeRobot, [], goalOrientedRobot, [])
