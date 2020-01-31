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
  const date = prettyDate.full({ start: data.start, end: data.end })
  const img = createImagePath({
    path: image.path,
    name: image.large
  })

  return {
    id: data._id,
    page: createEventPageLink({ slug: langIs.slug, id: data._id }),
    date,
    startDate: data.start,
    img,
    title,
    text: langIs.text,
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
    prevEventLink: props.prevLink,
    nextEventLink: props.nextLink
  }
}
