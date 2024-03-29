import React, {useState, useEffect} from 'react';
import './Deck.css';
import {useParams} from 'react-router-dom';
import {createCard, deleteCard, getDeck} from './apis/index';

type TDeck = {
  title: string;
  cards: string[];
  _id: string;
}

const Deck = () => {
  const [deck, setDeck] = useState<TDeck | undefined>();
  const [cards, setCards] = useState<string[]>([]);
  const [text, setText] = useState('');
  const {deckId} = useParams();

  useEffect(() => {
    if (!deckId) return;
    fetchDeck()
  }, [deckId]);


  const fetchDeck = async () => {
    const initialDeck = await getDeck(deckId);
    if (initialDeck !== null) {
      setDeck(initialDeck)
      setCards(initialDeck.cards)
    }
  }

  const handleCreateCard = async (e: React.FormEvent) => {
    e.preventDefault();
    const newDeck = await createCard(deckId!, text);
    if (newDeck !== null) {
      setDeck(newDeck)
      setCards(newDeck.cards)
      setText('')
    }
  };

  const handleDeleteCard = async (index) => {
    if (!deckId) return;
    const updatedDeck = await deleteCard(deckId, index);
    setDeck(updatedDeck)
    setCards(updatedDeck.cards)
  }

  return (
    <>
      <div className="Deck">
        <h1>{deck?.title}</h1>
        <ul className="cards">
          {cards.map((card, index) => (
            <li key={index}>
              <button onClick={() => handleDeleteCard(index)}>X</button>
              {card}
            </li>
          ))}
        </ul>
        <form onSubmit={handleCreateCard}>
          <label htmlFor="card-text">Card Text</label>
          <input
            id="card-text"
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setText(e.target.value);
            }}
          />
          <button>Create Card</button>
        </form>
      </div>
    </>
  )
};

export default Deck;