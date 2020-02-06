import axios from 'axios'
// import http from 'jsonp'
import processClient from '~/helpers/processClient'
import isExist from '~/helpers/isExist'

const convertDate = date => {
  date = new Date(date)
  const year = '' + date.getFullYear()
  const month = '' + (date.getMonth() + 1)
  const day = '' + date.getDate()
  return `${year}-${month.padStart(2, 0)}-${day.padStart(2, 0)}`
}
// all=menningarnott.is
export default (
  { limit, offset, search, date, time, id, type, access, place },
  callback,
  errorCallback
) =>
  processClient(() => {
    if (!id) {
      const data = {}
      time = isExist(time) ? time.split('-') : ['08:00', '23:59']
      if (isExist(date)) {
        data.range = `${convertDate(date)}T${time[0].padStart(
          2,
          0
        )},${convertDate(date)}T${time[1].padStart(2, 0)}`
      } else {
        date = new Date()
        const end = new Date().setFullYear(date.getFullYear() + 30)
        data.range = `${convertDate(date)}T${time[0].padStart(
          2,
          0
        )},${convertDate(end)}T${time[1].padStart(2, 0)}`
      }
      if (isExist(search) && search.length) data.search = search.toLowerCase()
      if (isExist(place)) data.place = place.toLowerCase()
      if (isExist(type)) data.tag = type.toLowerCase()
      if (isExist(access)) data.access = access
      if (isExist(limit)) data.limit = limit
      if (isExist(offset)) data.offset = offset
      if (isExist(id)) data.id = id

      return axios
        .post('https://safnadu.is/api', data)
        .then(({ data }) => callback(data))
        .catch(
          error => typeof errorCallback === 'function' && errorCallback(error)
        )
    } else {
      return axios
        .get('https://safnadu.is/api?id=' + id, { id })
        .then(({ data }) => callback(data))
        .catch(
          error => typeof errorCallback === 'function' && errorCallback(error)
        )
    }

    // queries = Object.keys(queries)
    //   .map(query => `${query}=${queries[query]}`)
    //   .join('&')
    // http(
    //   // `https://hvirfill.reykjavik.is/find?search=${search}&f=${date}&limit=${limit}&offset=${offset}&sort=start&lang=is`,
    //   `https://hvirfill.reykjavik.is/${method}?${queries}`,
    //   null,
    //   (error, data) => {
    //     if (error) {
    //       console.error(error && error.message)
    //     } else {
    //       callback(data)
    //     }
    //   }
    // )
  })
