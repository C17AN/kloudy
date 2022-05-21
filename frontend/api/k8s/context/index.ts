import kubernetes from "@kubernetes/client-node";
import axios from "axios";
import { K8S_API_ENDPOINT } from "config/constant";

export const getContextList = async () => {
  const clusterEndpoint = `${K8S_API_ENDPOINT}/cluster`;
  try {
    const { data } = await axios.get(clusterEndpoint);
    return data;
  } catch (err) {
    return { message: "Error while fetching cluster list" };
  }
};
