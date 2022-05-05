import iron from '../settings/Images/EmblemSILVER.png'
import bronze from '../settings/Images/EmblemBRONZE.png'
import silver from '../settings/Images/EmblemSILVER.png'
import gold from '../settings/Images/EmblemGOLD.png'
import platinum from '../settings/Images/EmblemPLATINUM.png'
import diamond from '../settings/Images/EmblemDIAMOND.png'
import master from '../settings/Images/EmblemMASTER.png'
import grandMaster from '../settings/Images/EmblemGRANDMASTER.png'
import challenger from '../settings/Images/EmblemCHALLENGER.png'
import { useSelector } from 'react-redux'
import { selectRank } from '../redux/rankSlice'
import './RankIcon.css'
import { useEffect, useState } from 'react'

const rankImg = (icon) => {
  if (icon === 'BRONZE') {
    return <img className="rankInfo" src={bronze} alt="" />
  }
  if (icon === 'SILVER') {
    return <img className="rankInfo" src={silver} alt="" />
  }
  if (icon === 'IRON') {
    return <img className="rankInfo" src={iron} alt="" />
  }
  if (icon === 'GOLD') {
    return <img className="rankInfo" src={gold} alt="" />
  }
  if (icon === 'PLATINUM') {
    return <img className="rankInfo" src={platinum} alt="" />
  }
  if (icon === 'DIAMOND') {
    return <img className="rankInfo" src={diamond} alt="" />
  }
  if (icon === 'MASTER') {
    return <img className="rankInfo" src={master} alt="" />
  }
  if (icon === 'GRANDMASTER') {
    return <img className="rankInfo" src={grandMaster} alt="" />
  }
  if (icon === 'CHALLENGER') {
    return <img className="rankInfo" src={challenger} alt="" />
  }
}

export const RankIcon = () => {
  const { rankInfo } = useSelector(selectRank)
  const [image, setImage] = useState()
  useEffect(() => {
    setImage(rankInfo.tier)
  }, [rankInfo])
  return <div>{rankImg(image)}</div>
}
