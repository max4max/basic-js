module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return false

  return arr
    .reduce((lettersArray, name) => {
      if (typeof name !== "string" || name.trim().length === 0)
        return lettersArray
      name = name.trim().split(" ", 1)[0]
      lettersArray.push(name[0].toUpperCase())
      return lettersArray
    }, [])
    .sort()
    .join("")
}
