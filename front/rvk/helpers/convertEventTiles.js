import createImagePath from '~/helpers/createImagePath'
import createEventPageLink from '~/helpers/createEventPageLink'
import prettyDate from '~/helpers/prettyDate'

export default data => {
  const image = data.image ? data.image : {}
  const langIs = data.language && data.language.is ? data.language.is : {}
  const title = langIs.title
  // const city = data.city
  // const street = data.street
  // const place = langIs.place
  // const text = street ? `${street} í ${city}` : city
  const date = `kl: ${prettyDate.simple(data.start)} - ${prettyDate.simple(
    data.end
  )}`
  const img = createImagePath({
    path: image.path,
    name: image.medium || image.large
  })

  return {
    id: data._id,
    page: createEventPageLink({ slug: langIs.slug, id: data._id }),
    date,
    startDate: data.start,
    img,
    title,
    // text: [street, city].join(', ')
    text: langIs.place
  }
}
