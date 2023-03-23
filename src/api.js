import axios from "axios";

const searchImages = async (term) => {
   const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
         Authorization: "Client-ID 6DE0VMinQdzRSB8k-ym455v65obLpMuNzJDwBI205WI",
      },
      params: {
         query: term,
      },
   });

   return response.data.results;
};

export default searchImages;
