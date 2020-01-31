import http from 'jsonp'
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
  { limit, offset, search, date, time, id, type, method },
  callback
) =>
  processClient(() => {
    method = method || 'find'
    let queries = {
      sort: 'start',
      lang: 'is'
    }
    time = isExist(time) ? time.split('-') : ['08:00', '23:59']
    if (isExist(search)) queries.search = search
    if (isExist(date)) {
      queries.range = `${convertDate(date)}T${time[0].padStart(
        2,
        0
      )},${convertDate(date)}T${time[1].padStart(2, 0)}`
    } else if (!isExist(date)) {
      date = new Date()
      queries.f = `${convertDate(date)}T${time[0].padStart(2, 0)}`
    }
    // if (isExist(type)) queries.all = type
    if (isExist(limit)) queries.limit = limit
    if (isExist(offset)) queries.offset = offset
    if (isExist(id)) queries._id = id

    queries = Object.keys(queries)
      .map(query => `${query}=${queries[query]}`)
      .join('&')
    http(
      // `https://hvirfill.reykjavik.is/find?search=${search}&f=${date}&limit=${limit}&offset=${offset}&sort=start&lang=is`,
      `https://hvirfill.reykjavik.is/${method}?${queries}`,
      null,
      (error, data) => {
        if (error) {
          console.error(error && error.message)
        } else {
          callback(data)
        }
      }
    )
  })
