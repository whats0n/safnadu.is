import createImagePath from '~/helpers/createImagePath'
import createEventPageLink from '~/helpers/createEventPageLink'
import prettyDate from '~/helpers/prettyDate'

export default data => {
  const image = data.image ? data.image : {}
  const langIs = data.language && data.language.is ? data.language.is : {}
  const min = data.min && data.min.replace(' ', 'T')
  const max = data.max && data.max.replace(' ', 'T')
  const time = `kl: ${prettyDate.simple(data.start)} - ${prettyDate.simple(
    data.end
  )}`

  const hasRange = min && max && min.split('T')[0] !== max.split('T')[0]

  let date = prettyDate.fullDate(data.start)

  if (hasRange) {
    const dateFrom = new Date(min)
    const dateTo = new Date(max)
    const dayFrom = dateFrom.getDate()
    const dayTo = dateTo.getDate()
    const monthFrom = dateFrom.getMonth()
    const monthTo = dateTo.getMonth()
    const yearFrom = dateFrom.getFullYear()
    const yearTo = dateTo.getFullYear()
    const sameMonth = monthFrom === monthTo
    const sameYear = yearFrom === yearTo

    const prettyMonthFrom = prettyDate.months[monthFrom]
    const prettyMonthTo = prettyDate.months[monthTo]

    date = !sameYear
      ? `${prettyMonthFrom} ${yearFrom} - ${prettyMonthTo} ${yearTo}`
      : sameYear && !sameMonth
      ? `${prettyMonthFrom} - ${prettyMonthTo} ${yearTo}`
      : `${dayFrom} - ${dayTo} ${prettyMonthTo.substring(0, 3)}. ${yearTo}`
  }

  return {
    id: data._id,
    page: createEventPageLink({ slug: langIs.slug, id: data._id }),
    date,
    time,
    dateRange: min && max ? [min, max] : null,
    startDate: data.start,
    startDateMS: new Date(data.min || data.start).getTime(),
    img: createImagePath({
      path: image.path,
      name: image.medium || image.large
    }),
    title: langIs.title,
    prev: data.prev,
    next: data.next,
    // text: [street, city].join(', ')
    text: langIs.place
  }
}
