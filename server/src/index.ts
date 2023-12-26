import express, {Request, Response} from 'express';
import mongoose from 'mongoose';

import DeckModal from './models/Deck';
import Deck from './models/Deck';

const PORT = 8000;

const app = express();

app.use(express.json());

app.post('/decks', async (req: Request, res: Response) => {

  console.log('body', req.body)
  const newDeck = new Deck(req.body)

  const createdDeck = await newDeck.save();
  res.send(createdDeck)
})

mongoose.connect('mongodb+srv://harshil:iYbqUpUwE2LOrBGP@cluster0.oi4zo1n.mongodb.net/').then(() => {
  console.log(`listening on port ${PORT}`)
  app.listen(PORT)
});

