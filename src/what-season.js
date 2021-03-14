const CustomError = require("../extensions/custom-error")

module.exports = function getSeason(userDate) {
  if (typeof userDate === "undefined" || !userDate)
    return "Unable to determine the time of year!"

  if (!(userDate instanceof Date) || isNaN(userDate)) throw new Error()

  const monthIndex = userDate.getMonth()

  if (2 <= monthIndex && monthIndex <= 4) return "spring"
  else if (5 <= monthIndex && monthIndex <= 7) return "summer"
  else if (8 <= monthIndex && monthIndex <= 10) return "fall"
  else return "winter"
}
