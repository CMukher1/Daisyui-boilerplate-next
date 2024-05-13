import axios from "axios";
import { useQuery } from "react-query";

const useAxios = (url: string, method: string = "get", data?: any) => {
  const fetchData = async () => {
    try {
      let response;
      switch (method.toLowerCase()) {
        case "get":
          response = await axios.get(url);
          break;
        case "post":
          response = await axios.post(url, data);
          break;
        case "put":
          response = await axios.put(url, data);
          break;
        case "delete":
          response = await axios.delete(url);
          break;
        default:
          throw new Error("Invalid HTTP method");
      }
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return useQuery("axiosData", fetchData);
};

export default useAxios;