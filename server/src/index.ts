import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import {config} from 'dotenv';
config();

import Deck from './models/Deck';

const PORT = 8000;

const app = express();

app.use(express.json());

app.post('/decks', async (req: Request, res: Response) => {

  const newDeck = new Deck(req.body)

  const createdDeck = await newDeck.save();
  res.send(createdDeck)
})

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`)
  app.listen(PORT)
});

