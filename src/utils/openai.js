import OpenAI from 'openai';
import { OPENAI_KEY } from './constants'; // Import the OpenAI key from constants.js

const openai = new OpenAI({
  apiKey: OPENAI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser:true,
});

export default openai;