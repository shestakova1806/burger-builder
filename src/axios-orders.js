import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-97457-default-rtdb.firebaseio.com/",
});

export default instance;
