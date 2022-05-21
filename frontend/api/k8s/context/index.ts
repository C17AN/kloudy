import axios from "axios";
import { K8S_API_ENDPOINT } from "config/constant";

export const getContextList = async () => {
  const contextEndpoint = `${K8S_API_ENDPOINT}/context`;
  try {
    const { data } = await axios.get(contextEndpoint);
    return data;
  } catch (err) {
    return { message: "Error while fetching context list" };
  }
};
