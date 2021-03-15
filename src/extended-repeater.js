module.exports = function repeater(str, options) {
  let resultAdd = ""

  if (str === null) str = "null"
  str = String(str)
  if (options === undefined) return result
  if (!("separator" in options)) options.separator = "+"

  if ("addition" in options) {
    if (options.addition === null) options.addition = "null"
    options.addition = String(options.addition)
    if (!("additionSeparator" in options)) options.additionSeparator = "|"

    resultAdd = options.addition
    if ("additionRepeatTimes" in options)
      for (let i = 2; i <= options.additionRepeatTimes; i++) {
        resultAdd = resultAdd + options.additionSeparator + options.addition
      }
  }

  let result = str + resultAdd
  console.log(result)
  if ("repeatTimes" in options)
    for (let i = 2; i <= options.repeatTimes; i++) {
      result = result + options.separator + str + resultAdd
    }

  return result
}
