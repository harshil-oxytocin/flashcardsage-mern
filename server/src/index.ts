import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {config} from 'dotenv';

config();

import Deck from './models/Deck';

const PORT = 8000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/decks', async (req: Request, res: Response) => {

  const decks = await Deck.find()

  res.json(decks)
})

app.post('/decks', async (req: Request, res: Response) => {

  const newDeck = new Deck(req.body)

  const createdDeck = await newDeck.save();
  res.json(createdDeck)
})

app.delete('/decks/:deckId', async (req: Request, res: Response) => {

  const deck = await Deck.findOneAndDelete({_id: req.params.deckId});

  res.json(deck)
})

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`)
  app.listen(PORT)
});

