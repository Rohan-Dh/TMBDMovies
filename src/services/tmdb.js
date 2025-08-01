import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

// export const getAPIData = async (query = "", filePath) => {
//     try{
//         const response = await axios.get(`${BASE_URL}/${filePath}`, {
//             params:{
//                 api_key: API_KEY,
//                 query,
//                 language:"en-US",
//                 page:1,
//                 include_adult: false, 
//             }
//         });
//         return respons.data.results;
//     }catch(error){
//         console.log("Error fetching the requested data: ", error);
//         return [];
//     }
// }