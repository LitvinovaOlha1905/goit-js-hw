import axios from 'axios';



const URL = "https://pixabay.com/api/";
const KEY = '39552850-54dc70447c84b28f4febbb84d';

export async function fetchGallery(q, page, perPage) {
  const url = `${URL}?key=${KEY}&q=${q}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal&safesearch=true`;
  const response = await axios.get(url);
  return response.data;
};


