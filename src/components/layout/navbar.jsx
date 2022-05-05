import { Link } from 'react-router-dom'
import Logo from '../../settings/Images/Logo.png'
import './navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo" />
      </Link>
      <h1 className="title">League of Legends Player Searcher</h1>
      <ul className="list">
        <li>
          <Link className="link" to="/">
            {' '}
            Home{' '}
          </Link>
        </li>
        <li>
          <a className="link" href="https://github.com/FernandoMonteiroBM">
            Github
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
