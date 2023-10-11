import './index.css'

const EmojiCard = props => {
  const {item, validating} = props
  const {id, emojiName, emojiUrl} = item

  const emojiClicked = () => {
    validating(id)
  }

  return (
    <li className="emoji-item" onClick={emojiClicked}>
      <button className="cardBtn" type="button">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
