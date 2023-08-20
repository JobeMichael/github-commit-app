import  { isBefore, subMonths, parseISO } from 'date-fns'

export const getFormattedDate = (date:string) => {
  const parsedDate = parseISO(date)
  const currentDate = new Date()
  const isBeforeAMonth = isBefore(parsedDate, subMonths(currentDate, 1))

  if(isBeforeAMonth) {
    
  }




  const formattedDate = isBeforeAMonth
    ? parsedDate.toLocaleDateString()
    : parsedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  return formattedDate
}