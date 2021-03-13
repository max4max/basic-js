module.exports = function countCats(initArry) {
  return initArry.reduce(
    (total, arr) =>
      total +
      arr.reduce(
        (tmpTotal, value) => (value === "^^" ? ++tmpTotal : tmpTotal),
        0
      ),
    0
  )
}
