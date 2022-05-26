import { resourceNameType } from "types/k8s/resourceName";
import { languageType } from "types/language";

export const getResourceName = (
  resourceName: resourceNameType,
  lang: languageType
) => {
  switch (resourceName) {
    case "node":
      if (lang === "ko") {
        return "노드";
      }
  }
};
