module.exports = function toReadable (number) {
  let ones = number % 10
  number = number / 10
  let tens = Math.floor(number % 10)
  number = number / 10
  let hundreds = Math.floor(number % 10)
  console.log(`ones: ${ones}, tens: ${tens}, hundreds: ${hundreds}`)
}
