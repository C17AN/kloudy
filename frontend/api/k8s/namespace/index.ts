import kubernetes from "@kubernetes/client-node";
import axios from "axios";
import { K8S_API_ENDPOINT } from "config/constant";

export const getNamespaceList = async () => {
  const namespaceEndpoint = `${K8S_API_ENDPOINT}/namespace`;
  try {
    const { data } = await axios.get(namespaceEndpoint);
    return data;
  } catch (err) {
    return { message: "Error while fetching namespace list" };
  }
};
