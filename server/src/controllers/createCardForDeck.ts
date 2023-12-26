import {Request, Response} from 'express';
import Deck from '../models/Deck';

export const createCardForDeck = async (req: Request, res: Response) => {

  const {text} = req.body;
  const deck = await Deck.findById(req.params.deckId);

  if (!deck) return res.status(400).send('no deck of this id exists')

  deck.cards.push(text)
  await deck.save();
  res.json(deck)
}