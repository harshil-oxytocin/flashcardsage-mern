import axios from 'axios';
import config from './config.json';

export const getDecks = async () =>{
  try {
    const {data}: [] = await axios.get(config.API_URL);
    return data
  } catch (error) {
    console.log('get error--', error)
    return []
  }
}