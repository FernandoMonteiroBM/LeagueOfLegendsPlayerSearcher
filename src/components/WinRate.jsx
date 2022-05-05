import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectRank } from '../redux/rankSlice'
import './WinRate.css'

export const WinRate = () => {
  const { rankInfo } = useSelector(selectRank)
  const [matchs, setMatchs] = useState(0)
  useEffect(() => {
    setMatchs((rankInfo.wins * 100) / (rankInfo.wins + rankInfo.losses))
  }, [rankInfo])

  return (
    <div>
      <Container>
        <div className="winsContainer">
          <h1>Win Rate: {matchs.toFixed(2)}%</h1>
        </div>
        <div className="infoContainer">
          <h1 className="wins">Wins: {rankInfo.wins}</h1>
          <h1 className="losses">Losses: {rankInfo.losses}</h1>
        </div>
      </Container>
    </div>
  )
}
