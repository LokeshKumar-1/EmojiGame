import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgainButtonTriggered} = props

  const buttonClicked = () => {
    playAgainButtonTriggered()
  }

  return (
    <div className="result-container">
      {score === 12 ? (
        <>
          <div className="content-defeat-container">
            <h1 className="result-heading">You Won</h1>
            <p className="defeat-score-word">Best Score</p>
            <p className="mark">{score}/12</p>
            <button
              className="btn-element"
              type="button"
              onClick={buttonClicked}
            >
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
            className="img-element"
          />
        </>
      ) : (
        <>
          <div className="content-defeat-container">
            <h1 className="result-heading">You Lose</h1>
            <p className="defeat-score-word">Score</p>
            <p className="mark">{score}/15</p>
            <button
              className="btn-element"
              type="button"
              onClick={buttonClicked}
            >
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
            className="img-element"
          />
        </>
      )}
    </div>
  )
}

export default WinOrLoseCard
