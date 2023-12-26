import axios from 'axios';
import config from './config.json';

export const createCard = async (deckId, text) => {
  try {
    const {data} = await axios.post(`${config.API_URL}${deckId}/cards`, {text})
    return data;
  } catch (error) {
    console.log('create error--', error)
    return null;
  }
}