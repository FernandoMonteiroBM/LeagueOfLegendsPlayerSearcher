import { ROUTES } from '../settings/routes'
import { request } from './RequestServices'

export async function getChampion(summonerId) {
  const routeInfo = ROUTES.champion.getDetails
  const url = `${ROUTES.baseRoute}${routeInfo.url(summonerId)}`
  try {
    const result = await request(url, routeInfo.type)
    return result
  } catch (error) {
    return {
      message: 'Error',
      error,
    }
  }
}
