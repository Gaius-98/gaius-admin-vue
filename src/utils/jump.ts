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
        window.open(address, '_blank')
      }
      break
    case 'page':
      break
    case 'form':
      router.push({
        path: '/preview/form',
        query: {
          id: address
        }
      })
      break
    case 'table':
      router.push({
        path: '/preview/table',
        query: {
          id: address
        }
      })
      break
    case 'iframe':
      router.push({
        path: '/preview/iframe',
        query: {
          id: encodeURIComponent(address!)
        }
      })
      break
    default:
      break
  }
}
