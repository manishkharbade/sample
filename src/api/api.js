import axios from "axios";

const BASE_URL = "https://api.publicapis.org/entries";

export const fetchApiData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// export const postApiData = async (data) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/endpoint`, data);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
