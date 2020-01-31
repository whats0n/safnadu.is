export default (() => {
  let timer = null
  return (callback, delay = 200) => {
    timer && clearTimeout(timer)
    timer = setTimeout(() => callback(), delay)
  }
})()
