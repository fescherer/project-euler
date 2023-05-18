const fullMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export function getDateFormated(date: string) {
  const dateobj = new Date(date)

  return `${dateobj.getFullYear()}, ${fullMonth[dateobj.getMonth()]}, ${dateobj
    .getDate()
    .toString()
    .padStart(2, '0')}`
}
