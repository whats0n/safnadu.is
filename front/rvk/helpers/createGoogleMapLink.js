export default ({ address, location }) => {
  const pattern = address
    ? address.split(' ').join('+')
    : location
    ? location.join(',')
    : ''

  return `https://www.google.com/maps/search/?api=1&query=${pattern}`
}
