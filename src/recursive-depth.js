module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let dept = 1
    let deptTotal = 1

    arr.forEach((element) => {
      if (Array.isArray(element)) {
        dept = dept + this.calculateDepth(element)
        if (dept > deptTotal) {
          deptTotal = dept
        }
        dept = 1
      }
    })

    return deptTotal
  }
}
