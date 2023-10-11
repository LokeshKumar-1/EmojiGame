import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    selectedEmojiList: [],
    isValidForNextClick: true,
    topScore: 0,
  }

  validating = id => {
    const {selectedEmojiList} = this.state

    if (selectedEmojiList.includes(id)) {
      this.setState({isValidForNextClick: false})
      return
    }
    this.setState(prevState => ({
      selectedEmojiList: [...prevState.selectedEmojiList, id],
    }))
  }

  playAgainButtonTriggered = () => {
    const {selectedEmojiList, topScore} = this.state

    const newTopScore =
      selectedEmojiList.length > topScore ? selectedEmojiList.length : topScore

    this.setState({
      selectedEmojiList: [],
      isValidForNextClick: true,
      topScore: newTopScore,
    })
  }

  render() {
    const {isValidForNextClick, selectedEmojiList, topScore} = this.state
    const score = selectedEmojiList.length

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const shuffledImage = shuffledEmojisList()

    return (
      <div className="bg-container">
        <NavBar
          isValidForNextClick={isValidForNextClick}
          score={score}
          topScore={topScore}
        />
        <div className="footer-container">
          {isValidForNextClick && score !== 12 ? (
            <ul className="emojiList-container">
              {shuffledImage.map(item => (
                <EmojiCard
                  item={item}
                  key={item.id}
                  validating={this.validating}
                  isValidForNextClick={isValidForNextClick}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              score={score}
              playAgainButtonTriggered={this.playAgainButtonTriggered}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
