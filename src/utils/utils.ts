export function getCurrentDate(inputDate?: Date): string {
  const date = inputDate ?? new Date()
  const day = date.getDate()
  const month = date.toLocaleString("es-ES", { month: "long" })
  return `${day} ${month}`
}
