import axios from 'axios';
import config from './config.json';

export const getDeck = async (deckId) => {
  try {
    const {data}: Object = await axios.get(`${config.API_URL}${deckId}`);
    return data
  } catch (error) {
    console.log('get error--', error)
    return null
  }
}