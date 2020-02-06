import createImagePath from '~/helpers/createImagePath'
import createEventPageLink from '~/helpers/createEventPageLink'
import createGoogleMapLink from '~/helpers/createGoogleMapLink'
import prettyDate from '~/helpers/prettyDate'

const mediaIcons = {
  facebook: 'facebook',
  website: 'website',
  youtube: 'youtube'
}

const mediaLabels = {
  facebook: 'Facebook',
  website: 'Vefsíða',
  youtube: 'Youtube'
}

// const mediaLinks = {
//   facebook: 'https://www.facebook.com'
// }

const getMediaLink = (id, link) => {
  return id === 'website' && link
}

export default (data, props) => {
  const image = data.image ? data.image : {}
  const langIs = data.language && data.language.is ? data.language.is : {}
  const title = langIs.title
  const img = createImagePath({
    path: image.path,
    name: image.large
  })

  const page = createEventPageLink({ slug: langIs.slug, id: data._id })

  const min = data.min && data.min.replace(' ', 'T')
  const max = data.max && data.max.replace(' ', 'T')
  const hasRange = min && max && min.split('T')[0] !== max.split('T')[0]

  let date = prettyDate.full({ start: data.start, end: data.end })
  let fullDate = date

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
      ? `${dayFrom}. ${prettyMonthFrom} - ${dayTo}. ${prettyMonthTo}`
      : `${dayFrom} - ${dayTo} ${prettyMonthTo.substring(0, 3)}. ${yearTo}`

    fullDate = !sameYear
      ? `${prettyMonthFrom} ${yearFrom} - ${prettyMonthTo} ${yearTo}`
      : sameYear && !sameMonth
      ? `${prettyMonthFrom} - ${prettyMonthTo} ${yearTo}`
      : `${dayFrom} - ${dayTo} ${prettyMonthTo.substring(0, 3)}. ${yearTo}`
  }

  return {
    id: data._id,
    page,
    date,
    dateRange: min && max ? [min, max] : null,
    startDate: data.start,
    fullDate,
    img,
    title,
    text: langIs.text,
    hasRange,
    address: [data.street, data.postal, data.city].join(', '),
    place: langIs.place,
    media:
      data.media &&
      Object.keys(data.media)
        .map(key => ({
          id: key,
          icon: mediaIcons[key],
          text: mediaLabels[key],
          href: getMediaLink(key, data.media[key])
        }))
        .filter(item => !!item.href),
    mapLink:
      langIs.place &&
      Array.isArray(data.location) &&
      createGoogleMapLink({
        location: data.location,
        address: langIs.place
      }),
    mapText: `Go to google map: ${12}`,
    prevEventLink: props.prevLink !== page ? props.prevLink : null,
    nextEventLink: props.nextLink !== page ? props.nextLink : null
  }
}
