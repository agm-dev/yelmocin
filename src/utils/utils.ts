export function getCurrentDate(inputDate?: Date): string {
  const date = inputDate ?? new Date()
  const locale = "es-ES"
  const day = date.toLocaleString(locale, { day: "2-digit" })
  const month = date.toLocaleString(locale, { month: "long" })
  return `${day} ${month}`
}
