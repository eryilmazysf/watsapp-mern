import axios from "axios";
const instance = axios.create({
  baseURL: "http://wp-env.eba-bwdchcds.us-east-1.elasticbeanstalk.com",
});
export default instance;
