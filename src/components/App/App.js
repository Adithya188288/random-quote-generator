import React, { useState, useEffect } from "react"
import Card from "../Card/Card"
import "./App.css"
import { async } from "q"

function App() {
  //state for quote Api
  //random api url - https://api.quotable.io/random

  const [quote, setQuote] = useState({})
  let [background, setBackground] = useState("")

  useEffect(() => {
    fetchQuote()
  }, [])

  //predefined background Style for the card
  const backgroundImage = [
    "linear-gradient(135deg, #abdcff 5%, #0396ff 95%)",
    "linear-gradient(135deg, #90f7ec 0%, #32ccbc 100%",
    "linear-gradient(135deg, #feb692 25%, #ea5455 75%",
    "linear-gradient(135deg, #b2dfdb 25%, #00796b 75%"
  ]

  const fetchQuote = async () => {
    await fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => setQuote(data))
      .catch(error => new Error(error))

    setBackground(backgroundImage[randomBackground()])
  }

  //Set a a random background
  const randomBackground = () => {
    var random = Math.floor(Math.random() * 4)
    return random
  }

  return (
    <div className="App">
      <Card quote={quote} fetchQuote={fetchQuote} background={background} />
    </div>
  )
}

export default App
