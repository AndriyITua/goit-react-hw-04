import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchPhotos = async (searchQuery, currentPage) => {
  const response = await axios.get(`/search/photos/`, {
    params: {
      query: searchQuery,
      per_page: 12,
      page: currentPage,
      client_id: "eLx6avcLOU7M_8krqPoNVY0zm5KlgWjMmPucoWQxpRM",
    },
  });

  return response.data.results;
};
