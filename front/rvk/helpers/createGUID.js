const createS4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
}

const createGUID = () =>
  ['', '', '-', '-', '-', '-', '', '', ''].reduce(
    (prev, next) => prev + createS4() + next
  )

export default createGUID
