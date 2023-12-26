import axios from 'axios';
import config from './config.json';

export const deleteDeck = async (deckId) => {
  try {
    await axios.delete(`${config.API_URL}${deckId}`)
    return true;
  } catch (error) {
    console.log('delete error--', error)
    return false
  }
}