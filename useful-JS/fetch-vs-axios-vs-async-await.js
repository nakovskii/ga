import axios from 'axios'; 
// synchronous fetch

const getTacos = {
  const resp = fetch(url).then(json => response.json).then(data => return data);
  return resp.data;
}

// async fetch

const getTacosAsync = async () => {
  const resp = await fetch(url);
  const result = await resp.json();
  return result.data
}

// async axios

const iLoveTacosAndAxios = async () => {
  const resp = await axios.get(url);
  return resp.data;
}