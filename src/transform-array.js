module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error()

  function isControl(val) {
    let controlArr = [
      "--discard-next",
      "--double-next",
      "--double-prev",
      "--discard-prev",
    ]
    if (controlArr.indexOf(val) >= 0) return true
  }

  return [...arr].reduce((resArr, item, index, sourceArr) => {
    if (typeof item === "undefined") return resArr

    if (
      item === "--discard-next" &&
      !isControl(sourceArr[index + 1]) &&
      index + 2 <= sourceArr.length
    ) {
      sourceArr.splice(index + 1, 1)
      return resArr
    }

    if (
      item === "--double-next" &&
      !isControl(sourceArr[index + 1]) &&
      index + 2 <= sourceArr.length
    ) {
      resArr.push(sourceArr[index + 1])
      return resArr
    }

    if (
      item === "--double-prev" &&
      !isControl(sourceArr[index - 1]) &&
      index - 1 >= 0
    ) {
      resArr.push(sourceArr[index - 1])
      return resArr
    }

    if (
      item === "--discard-prev" &&
      !isControl(sourceArr[index - 1]) &&
      index - 1 >= 0
    ) {
      resArr.pop()
      return resArr
    }

    if (!isControl(item)) resArr.push(item)
    return resArr
  }, [])
}
