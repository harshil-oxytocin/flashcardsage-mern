import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId; // add Type.ObjectId if this returning error

const deckSchema = new Schema({
  title: String,
  cards:[String]
});

const DeckModal = mongoose.model('Deck', deckSchema);

export default DeckModal;