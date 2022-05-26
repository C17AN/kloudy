/**
 * 이 파일에서 정의한 리소스 타입은 URL 쿼리 파라미터가 됩니다.
 * Ex. localhost:3000/<클러스터 이름>?resource=namespace
 */
export type resourceNameType =
  | "node"
  | "namespace"
  | "cluster"
  | "volume";
