import './index.css'

const NavBar = props => {
  const {isValidForNextClick, score, topScore} = props
  return (
    <nav className="nav">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logoName">Emoji Game</h1>
      </div>
      {isValidForNextClick && score < 12 ? (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      ) : null}
    </nav>
  )
}

export default NavBar
