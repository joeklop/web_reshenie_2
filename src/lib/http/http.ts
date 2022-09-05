import axios from "axios";
import { BASE_URL, TIMEOUT } from "lib/constants/constants";

const createApi = () => {
  return axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });
};

export const projectAxios = createApi();
