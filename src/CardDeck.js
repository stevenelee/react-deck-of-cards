import React, { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://deckofcardsapi.com/api/deck"

function CardDeck() {
  const [deck, setDeck] = useState(null);
  const [card, setCard] = useState(null);

  useEffect(function createDeck() {
    async function getDeck() {
      const response = await axios.get(`${URL}/new/shuffle`);
      setDeck(response.data);
    };
    getDeck();
  }, [])

  async function getCard() {
    const response = await axios.get(`${URL}/${deck.deck_id}/draw/?count=1`);
    setCard(response.data.cards[0]);
  }

  return (
    <div>
      <button onClick={getCard}>Draw A Card</button>
      <div>
        {card
          ?
          (<div>
            <p>{card.value}</p>
            <p>{card.suit}</p>
          </div>)
          :
          (<p></p>)
          }
    </div>
    </div>
    )
}

export default CardDeck;