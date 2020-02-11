//MAPS

const arr = [1, 1, 2, 2, 2, 4, 5, 5]
const mapObj = new Map()
for (const ele of arr) {
  if (mapObj.has(ele)) {
    mapObj.set(ele, mapObj.get(ele) + 1)
  } else {
    mapObj.set(ele, 1)
  }
}
console.log(mapObj)
