const utils = {
  typeIs (data) {
    return Object.prototype.toString.call(data).slice(8, -1)
  },
  isString (data) {
    return utils.typeIs(data) === 'String'
  }
}

export default utils