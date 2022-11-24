import axios from "axios";

const getArts = async () => {
  const arts = await axios.get("/api/gallery"); // -> GET http://localhost:8000/api/gallery
  return arts.data;
};

const getArt = async (id) => {
  const art = await axios.get(`/api/gallery/${id}`); // -> GET http://localhost:8000/api/gallery/:id
  return art.data;
};

const createArt = async (artData) => {
  const art = await axios.post(`/api/gallery`, artData); // -> GET http://localhost:8000/api/gallery/
  return art.data;
};

const artsService = {
  getArts,
  getArt,
  createArt,
};

export default artsService;
