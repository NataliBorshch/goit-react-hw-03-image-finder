import axios from "axios";
const key = "20579832-dcfce4d3159167d27b56de5b7";

const fetchImg = ({ search = "", page = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${search}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data);
};

export default fetchImg;
