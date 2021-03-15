class VigenereCipheringMachine {
  letterAray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

  square = (() => {
    return this.letterAray.map((letter, i, array) => {
      return array.slice(i).concat(array.slice(0, i))
    })
  })()

  constructor(direct = true) {
    this.direct = direct
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error()
    }

    message = message.toUpperCase()
    key = key.toUpperCase()

    let result = ""
    let keyIndex = 0

    if (message.length / key.length > 0)
      key = key.repeat(Math.ceil(message.length / key.length))

    for (let i = 0; i < message.length; i++) {
      if (message[i] === " " || !this.letterAray.includes(message[i])) {
        result = result + message[i]
        continue
      }

      result =
        result +
        this.square[this.letterAray.indexOf(message[i])][
          this.letterAray.indexOf(key[keyIndex])
        ]

      keyIndex++
    }

    if (this.direct) {
      return result
    }

    return result.split("").reverse().join("")
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error()
    }

    message = message.toUpperCase()
    key = key.toUpperCase()

    let result = ""
    let keyIndex = 0

    if (message.length / key.length > 0)
      key = key.repeat(Math.ceil(message.length / key.length))

    for (let i = 0; i < message.length; i++) {
      if (message[i] === " " || !this.letterAray.includes(message[i])) {
        result = result + message[i]
        continue
      }

      result =
        result +
        this.letterAray[
          this.square[this.letterAray.indexOf(key[keyIndex])].indexOf(
            message[i]
          )
        ]

      keyIndex++
    }

    if (this.direct) {
      return result
    }

    return result.split("").reverse().join("")
  }
}

module.exports = VigenereCipheringMachine
