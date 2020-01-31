export default ({ address, location }) =>
  `https://www.google.com/maps/place/${address
    .split(' ')
    .join('+')}/@${location.join(',')},18z`
