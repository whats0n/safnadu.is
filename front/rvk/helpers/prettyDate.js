const months = [
  'janúar',
  'febrúar',
  'mars',
  'apríl',
  'maí',
  'júní',
  'júlí',
  'ágúst',
  'september',
  'oktober',
  'nóvember',
  'desember'
]

const days = [
  'Sunnudagur',
  'Mánudagur',
  'Þriðjudagur',
  'Miðvikudagur',
  'Fimmtudagur',
  'Föstudagur',
  'Laugardagur'
]

const simple = date => {
  date = new Date(date)
  const hours = '' + date.getHours()
  const minutes = '' + date.getMinutes()
  return `${hours}:${minutes.padStart(2, 0)}`
}

const full = ({ start, end }) => {
  start = new Date(start)
  const day = '' + start.getDate()
  const month = '' + start.getMonth()
  return `${day}. ${months[month]} ${simple(start)} - ${simple(end)}`
}

const fullDate = date => {
  date = new Date(date)
  const day = '' + date.getDate()
  const month = '' + (date.getMonth() + 1)
  const year = '' + date.getFullYear()
  return `${day.padStart(2, 0)}.${month.padStart(2, 0)}.${year}`
}

export default {
  simple,
  full,
  fullDate,
  months,
  days
}
