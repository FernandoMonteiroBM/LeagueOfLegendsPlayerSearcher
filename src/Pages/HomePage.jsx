import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { getSummonerDetails } from '../services/summonerServices'
import './HomePage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeUser } from '../redux/userSlice'

function HomePage() {
  const [searchSummoner, setSearchSummoner] = useState('')
  const history = useNavigate()
  const dispatch = useDispatch()
  const getData = async (summonerName) => {
    const response = await getSummonerDetails(summonerName)
    if (response.data === undefined) {
    } else {
      dispatch(changeUser(response.data))
    }
  }
  const handleChange = (playerName) => {
    setSearchSummoner(playerName.target.value)
  }

  const onSubmitForm = () => {
    getData(searchSummoner)
    history('/playerProfile')
  }
  return (
    <div className="container">
      <Form className="form" onSubmit={onSubmitForm}>
        <Form.Group controlId="SummonerName">
          <Form.Control
            onChange={handleChange}
            type="summonerName"
            placeholder="Enter Summoner Name"
          />
        </Form.Group>
        <Button className="btn btn-danger" onClick={onSubmitForm}>
          Search for Player
        </Button>
      </Form>
    </div>
  )
}

export default HomePage
