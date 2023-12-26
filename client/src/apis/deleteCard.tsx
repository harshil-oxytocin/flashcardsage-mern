import axios from 'axios';
import config from './config.json';

export const deleteCard = async (deckId,index) => {
  try {
    const {data} =await axios.delete(`${config.API_URL}${deckId}/cards/${index}`)
    return data;
  } catch (error) {
    console.log('delete error--', error)
    return null
  }
}