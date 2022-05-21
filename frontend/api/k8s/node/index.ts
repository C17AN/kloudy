import axios from "axios";
import { K8S_API_ENDPOINT } from "config/constant";

export const getNodeList = async () => {
  const nodeEndpoint = `${K8S_API_ENDPOINT}/node`;
  try {
    const { data } = await axios.get(nodeEndpoint);
    return data;
  } catch (err) {
    return { message: "Error while fetching node list" };
  }
};
