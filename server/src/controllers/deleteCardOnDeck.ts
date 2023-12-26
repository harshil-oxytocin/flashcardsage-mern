import {Request, Response} from 'express';
import Deck from '../models/Deck';

export const deleteCardOnDeck = async (req: Request, res: Response) => {

  const deck = await Deck.findById(req.params.deckId);

  if (!deck) return res.status(400).send('no deck of this id exists')

  deck.cards.splice(parseInt(req.params.index), 1)
  await deck.save();
  res.json(deck)
}