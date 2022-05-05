import { ROUTES } from '../settings/routes'
import { request } from './RequestServices'

export async function getSummonerRank(summonerId) {
  const routeInfo = ROUTES.rank.getDetails
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
