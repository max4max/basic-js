const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (value === undefined) value = " "
    else if (value === null) value = "null"
    else if (value === NaN) value = "NaN"

    this.chain.push(value.toString())
    return this
  },
  removeLink(position) {
    if (
      isNaN(position) ||
      !Number.isInteger(position) ||
      position < 0 ||
      position >= this.chain.length
    ) {
      this.chain = []
      throw new Error()
    }

    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    const chain = this.chain.reduce(
      (chain, item, index, array) =>
        chain +
        "( " +
        item +
        (() => (index === array.length - 1 ? " )" : " )~~"))(),
      ""
    )
    this.chain = []
    return chain
  },
}

module.exports = chainMaker
