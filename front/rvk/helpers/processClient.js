export default callback =>
  process.client && typeof callback === 'function' && callback()
