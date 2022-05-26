import { resourceNameType } from "types/k8s/resourceName";
import { languageType } from "types/language";

const getLocaleResourceName = (
  resourceName: resourceNameType,
  lang: languageType = "ko"
) => {
  switch (resourceName) {
    case "node":
      if (lang === "ko") {
        return "노드";
      } else if (lang === "en") {
        return "node";
      }
    case "namespace":
      if (lang === "ko") {
        return "네임스페이스";
      } else if (lang === "en") {
        return "namespace";
      }
    case "cluster":
      if (lang === "ko") {
        return "클러스터";
      } else if (lang === "en") {
        return "cluster";
      }
    case "volume":
      if (lang === "ko") {
        return "볼륨";
      } else if (lang === "en") {
        return "volume";
      }
    default:
      return null;
  }
};

export default getLocaleResourceName;
