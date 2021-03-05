import axios from "axios";
const instance = axios.create({
  baseURL: "https://wp-backend-mern.herokuapp.com",
});
export default instance;
