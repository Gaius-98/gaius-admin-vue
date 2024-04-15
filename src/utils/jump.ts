import router from '@/router/index'
import type { ResMenuItem } from '@/model'
export default (data: ResMenuItem) => {
  const { type, address, openType } = data
  switch (type) {
    case 'front':
      if (openType == '_self') {
        router.push({
          path: address
        })
      } else if (openType == '_blank') {
        router.push({
          path: '/link',
          params: {
            orgUrl: address
          }
        })
      }
      break
    case 'page':
      break
    case 'form':
      break
    case 'table':
      break
    default:
      break
  }
}
