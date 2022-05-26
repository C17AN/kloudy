import { NodeCondition } from "types/k8s/node/condition";

/**
 *
 * @param conditionList
 * 노드 리소스의 상태를 검사 후, 준비 상태일 시 True / 그렇지 않을 경우 False를 리턴합니다.
 * @returns Boolean: 노드의 준비 여부
 */

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
