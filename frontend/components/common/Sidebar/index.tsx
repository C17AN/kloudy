import React, {
  useEffect,
  useLayoutEffect,
  useState
} from "react";
import Image from "next/image";
import SidebarItem from "./item";
import Select from "../Select";
import SidebarItemContainer from "./SidebarItemContainer";
import {
  ChipIcon,
  FolderOpenIcon,
  ServerIcon
} from "@heroicons/react/outline";
import { getContextList } from "api/k8s/context";
import { getNamespaceList } from "api/k8s/namespace";
import { useRouter } from "next/router";

type SidebarProps = {};

const Sidebar = ({}: SidebarProps) => {
  const router = useRouter();
  const [contextList, setContextList] = useState<any>([]);
  const [namespaceList, setNamespaceList] = useState<any>(
    []
  );
  const [selectedNamespace, setSelectedNamespace] =
    useState<any>();

  const initData = async () => {
    const contextList = await getContextList();
    const namespaceList = await getNamespaceList();
    setContextList(contextList);
    setNamespaceList(namespaceList);
  };

  useEffect(() => {
    initData();
  }, [contextList]);

  const selectNamespace = (name: string) => {
    setSelectedNamespace(name);
  };

  return (
    <aside className="w-64 h-full mr-10 py-4 px-6 rounded-xl bg-primary shadow-[1px_1px_2px_2px_rgba(0,0,0,0.1)]">
      <div className="flex items-center bg-white rounded-md py-2 px-4">
        <Image
          src="/icons/k8s.svg"
          width="48"
          height="48"
        />
        <div className="flex flex-col ml-2">
          <h2 className="text-xl text-gray-600 font-semibold">
            Kloudy
          </h2>
          <p className="text-xs text-gray-300">
            GUI For K8s
          </p>
        </div>
      </div>
      <SidebarItemContainer
        text="클러스터 목록"
        icon={<ChipIcon className="w-4 h-4" />}
      >
        {contextList?.length > 0 && (
          <Select items={contextList} />
        )}
      </SidebarItemContainer>
      <SidebarItemContainer
        text="노드 목록"
        icon={<ServerIcon className="w-4 h-4" />}
        onClick={() => {
          router.push(
            "클러스터 아이디/?resource=node",
            undefined,
            {
              shallow: true
            }
          );
        }}
      />
      <SidebarItemContainer
        text="네임스페이스 목록"
        icon={<FolderOpenIcon className="w-4 h-4" />}
        onClick={() => {
          router.push(
            "클러스터 아이디/?resource=namespace",
            undefined,
            {
              shallow: true
            }
          );
        }}
      />
      <SidebarItemContainer
        text="볼륨 목록"
        icon={<FolderOpenIcon className="w-4 h-4" />}
        onClick={() => {
          router.push(
            "클러스터 아이디/?resource=volume",
            undefined,
            {
              shallow: true
            }
          );
        }}
      />
    </aside>
  );
};

export default Sidebar;
