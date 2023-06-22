// Write your React code here.
import {Component} from 'react'
import './index.css'

const Emoji = props => {
  const {item, functionThankYou} = props
  const {name, imageUrl} = item

  const clickFunction = () => {
    functionThankYou()
  }

  return (
    <li className="list-item">
      <button type="button" className="emoji-button" onClick={clickFunction}>
        <img src={imageUrl} alt={name} className="picture" />
      </button>
      <p className="paragraph">{name}</p>
    </li>
  )
}

class Feedback extends Component {
  state = {statement: false}

  /*
    return (
      <div className="thankyou-container">
        <img src={url} className="love-picture" alt="love emoji" />
      </div>
    )
    */
  functionThankYou = () => {
    this.setState({
      statement: true,
    })
  }

  render() {
    const {statement} = this.state

    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    let message

    if (statement === false) {
      message = (
        <div className="container-1">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <div className="emojis-container">
            <ul className="unordered-emojis">
              {emojis.map(
                eachEmoji => (
                  <Emoji
                    item={eachEmoji}
                    key={eachEmoji.id}
                    functionThankYou={this.functionThankYou}
                  />
                ),

                /*
                const {name, imageUrl} = eachEmoji
                return (
                  <li className="list-item">
                    <button
                      type="button"
                      className="emoji-button"
                      onClick={this.functionThankYou}
                    >
                      <img src={imageUrl} alt={name} className="picture" />
                    </button>
                    <p className="paragraph">{name}</p>
                  </li>
                )
              )}
              */
              )}
            </ul>
          </div>
        </div>
      )
    } else {
      message = (
        <div className="thankyou-container">
          <img src={loveEmojiUrl} className="love-picture" alt="love emoji" />
          <h1 className="thankyou-heading">Thank You!</h1>
          <p className="thankyou-paragraph">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      )
    }

    return <div className="bg-container">{message}</div>
  }
}

export default Feedback
