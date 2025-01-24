import { panelStore } from '@/stores/store'

// Unix to Formatted Date Time
export const unixToDateTime = function(date) {
  if(date == null || date == 0){
    return '-'
  }
  return dayjs.unix(date).format('DD.MM.YYYY HH:mm')
}

// Get Now
export const now = function(date) {
  return dayjs().format('DD.MM.YY HH:mm')
}
