import {Request, Response} from 'express';
import Deck from '../models/Deck';

export const deleteDeck = async (req: Request, res: Response) => {

  const deck = await Deck.findOneAndDelete({_id: req.params.deckId});

  res.json(deck)
}