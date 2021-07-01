module.exports = function toReadable (number) {
  let units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let anomalyTens = {10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen',17: 'seventeen',18: 'eighteen',19: 'nineteen'}

  let stringed = String(number)
  if (stringed.length === 3) {
    if (stringed[1] > 1 && stringed[2] > 0) {
      return `${units[stringed[0] - 1]} hundred ${tens[stringed[1] - 2]} ${units[stringed[2] - 1]}`
    }

    if (stringed[1] == 1) {
      let ten = stringed[1] + stringed[2]
      for (key in anomalyTens) {
        if (ten == key) {
          ten = anomalyTens[key]
        }
      }
      return `${units[stringed[0] - 1]} hundred ${ten}`
    }
    if (stringed[1] > 1 && stringed[2] == 0) {
      return `${units[stringed[0] - 1]} hundred ${tens[stringed[1] - 2]}`
    }
    if (stringed[1] == 0 && stringed[2] > 0) {
      return `${units[stringed[0] - 1]} hundred ${units[stringed[2] - 1]}`
    }
    if (stringed[1] == 0 && stringed[2] == 0) {
      return `${units[stringed[0] - 1]} hundred`
    }
  }

  if (stringed.length == 2) {
    if (stringed[0] > 1 && stringed[1] > 0) {
      return `${tens[stringed[0] - 2]} ${units[stringed[1] - 1]}`
    }
    if (stringed[0] > 1 && stringed[1] == 0) {
      return `${tens[stringed[0] - 2]}`
    }
    if (stringed[0] == 1) {
      let ten = stringed[0] + stringed[1]
      for (key in anomalyTens) {
        if (ten == key) {
          ten = anomalyTens[key]
        }
      }
      return `${ten}`
    }
  }
}
