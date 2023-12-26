import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {createDeck, deleteDeck, getDecks} from './apis/index';

type TDeck = {
  title: string;
  cards: string[];
  _id: string;
}

function App() {
  const [title, setTitle] = useState('');
  const [allDecks, setAllDecks] = useState<TDeck[]>([]);

  useEffect(() => {
    fetchDecks()
  }, []);

  const fetchDecks = async () => {
    const decks: [] = await getDecks();
    setAllDecks(decks)
  }


  const handleCreateDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    const deck = await createDeck(title)
    if (deck !== null) {
      setAllDecks([...allDecks, deck])
      setTitle('')
    }
  }

  const handleDeleteDeck = async (deckId: string) => {
    const isDeleted = await deleteDeck(deckId);

    if (isDeleted) {
      setAllDecks(allDecks.filter((deck) => deck._id !== deckId))
    }
  }

  return (
    <>
      <div className="container">
        <div className="App">
          <h1>Your Decks</h1>

          <ul className="decks">
            {allDecks.map((deck) => (
              <li key={deck._id}>
                <button onClick={() => handleDeleteDeck(deck._id)}>X</button>

                <Link to={`decks/${deck._id}`}>{deck.title}</Link>
              </li>
            ))}
          </ul>
          <form onSubmit={handleCreateDeck}>
            <label htmlFor="deck-title">Deck Title</label>
            <input
              id="deck-title"
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(e.target.value);
              }}
            />
            <button>Create Deck</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
