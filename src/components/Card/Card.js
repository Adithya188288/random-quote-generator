import React from "react"
import "./Card.css"

function Card(props) {
  const { quote, fetchQuote, background } = props
  const { content, author } = quote

  return (
    <div className="Card-Container" id="quote-box">
      <h2 className="text-center mt4">Random Quotes for the day</h2>
      <div>
        {content ? (
          <div
            className="Card Card-Flex"
            id="text"
            style={{ backgroundImage: props.background }}
          >
            {content}
            <div id="author">{`- ${author}`}</div>
            <div className="Card-Elements">
              <a href="twitter.com/intent/tweet" id="tweet-quote">
                <i className="fab fa-twitter"></i>
              </a>
              <button id="new-quote" className="button" onClick={fetchQuote}>
                Next Quote
              </button>
            </div>
          </div>
        ) : (
          "Writing a quote for you now......"
        )}
      </div>
    </div>
  )
}

export default Card
