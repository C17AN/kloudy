import { NodeCondition } from "types/k8s/node/condition";

const nodeConditionChecker = (
  conditionList: NodeCondition[]
) => {
  const isReady = conditionList.some(condition => {
    return (
      condition.type === "Ready" &&
      condition.status === "True"
    );
  });

  return isReady;
};

export default nodeConditionChecker;
