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
  'nóvember'
]

const days = [
  'Mánudagur',
  'Þriðjudagur',
  'Miðvikudagur',
  'Fimmtudagur',
  'Föstudagur',
  'Laugardagur',
  'Sunnudagur'
]

const simple = date => {
  date = new Date(date)
  const hours = '' + date.getHours()
  const minutes = '' + date.getMinutes()
  return `${hours}:${minutes.padEnd(2, 0)}`
}

const full = ({ start, end }) => {
  start = new Date(start)
  const day = '' + start.getDate()
  const month = '' + start.getMonth()
  return `${day}. ${months[month]} ${simple(start)} - ${simple(end)}`
}

export default {
  simple,
  full,
  months,
  days
}
