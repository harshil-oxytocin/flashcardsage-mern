import {Request, Response} from 'express';
import Deck from '../models/Deck';

export const createDeck = async (req: Request, res: Response) => {

  const newDeck = new Deck(req.body)

  const createdDeck = await newDeck.save();
  res.json(createdDeck)
}