/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { RankIcon } from '../components/RankIcon'
import { WinRate } from '../components/WinRate'
import { changeRank } from '../redux/rankSlice'
import { selectUser } from '../redux/userSlice'
import { getSummonerRank } from '../services/RankServices'
import { IMAGES } from '../settings/images'
import './PlayerProfilePage.css'

function PlayerProfilePage() {
  const { playerInfo } = useSelector(selectUser)
  const iconInfo = IMAGES.icon.getDetails
  const dispatch = useDispatch()
  const getData = async (id) => {
    const response = await getSummonerRank(id)
    if (response.data === undefined) {
    } else {
      dispatch(changeRank(response.data[0]))
    }
  }
  useEffect(() => {
    getData(playerInfo.id)
  }, [playerInfo.id])

  return (
    <div>
      <Container className="cardContainer">
        <div className="gridContainer">
          <div className="gridItem">
            <div className="profileContainer">
              <img
                className="profileIcon"
                src={iconInfo.url(playerInfo.profileIconId)}
                alt="Icon Profile"
              />
              <h3 className="profileLv">Lv: {playerInfo.summonerLevel}</h3>
              <h1 className="playerName">{playerInfo.name}</h1>
              <h1>Rank: </h1>
              <RankIcon />
            </div>
          </div>
          <div className="gridItem">
            <div className="winRateContainer">
              <WinRate />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PlayerProfilePage
