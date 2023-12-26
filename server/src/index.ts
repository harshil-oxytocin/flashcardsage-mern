import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {config} from 'dotenv';

config();

import {getDecks, createDeck, deleteDeck, createCardForDeck, getDeck,deleteCardOnDeck} from './controllers';

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/decks', getDecks)
app.post('/decks', createDeck)
app.delete('/decks/:deckId', deleteDeck)
app.post('/decks/:deckId/cards', createCardForDeck)
app.get('/decks/:deckId', getDeck)
app.delete('/decks/:deckId/cards/:index', deleteCardOnDeck)

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`)
  app.listen(PORT)
});

