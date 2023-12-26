import React, {useState, useEffect} from 'react';
import './App.css'
import axios from 'axios';
// import {Link} from 'react-router-dom';

type TDeck={
  title:string;
  _id:string;
}

function App() {
  const [title, setTitle] = useState('');
  const [allDecks, setAllDecks] = useState<TDeck[]>([]);

  useEffect(() => {
    fetchDecks()
  }, []);

  const fetchDecks = async () => {
    try {
      const {data}: [] = await axios.get('http://localhost:8000/decks');
      setAllDecks(data)
    }catch (error) {
      console.log('get error--', error)
      setAllDecks([])
    }
  }


  const handleCreateDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/decks', {title})
      setTitle('')
      fetchDecks()
    } catch (error) {
      console.log('create error--', error)
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
                {/*<button onClick={() => handleDeleteDeck(deck._id)}>X</button>*/}

                <p to={`decks/${deck._id}`}>{deck.title}</p>
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
