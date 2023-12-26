import axios from 'axios';
import config from './config.json';

export const createDeck = async (title) => {
  try {
    const {data} = await axios.post(config.API_URL, {title})
    return data;
  } catch (error) {
    console.log('create error--', error)
    return null;
  }
}