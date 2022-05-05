import { ROUTES } from '../settings/routes'
import { request } from './RequestServices'

export async function getSummonerDetails(summonerName) {
  const routeInfo = ROUTES.summoner.getDetails
  const url = `${ROUTES.baseRoute}${routeInfo.url(summonerName)}`
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
