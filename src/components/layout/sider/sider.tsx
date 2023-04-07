import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import { ItemMenus, menuAdmin, menuEmployer, menuUsers } from "./menu";
import { useMemo, useCallback, useState, Fragment } from "react";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { MenuProps } from "rc-menu";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

interface ItemSider extends Omit<ItemMenus, "children"> {
  key: string;
  children?: ItemSider[];
}

type SiderCpnProps = {
  menus: ItemMenus[];
};

const SiderCpn = (props: SiderCpnProps) => {
  const { menus } = props;
  const history = useNavigate();
  const location = useLocation();
  // const { path } = useQuery();

  const [showMin, setShowMin] = useState(false);

  const getLink = useCallback((link?: string) => {
    return link ?? "";
  }, []);

  const items = useMemo(
    () =>
      menus.map((m, index) => {
        return {
          ...m,
          key: index.toString(),
          link: getLink(m.link),
          children: m.children
            ?.map((c, i) => {
              return { ...c, key: `${index}_${i}`, link: getLink(c.link) };
            })
            .filter((c) => c),
        };
      }),
    [getLink, menus]
  );

  const defaultOpenKeys = useMemo(
    () => menus.map((m, i) => (m.children ? i.toString() : undefined)).filter((i) => i),
    [menus]
  );

  const getSelectedKeys = useCallback((pathname: string, items: ItemSider[]) => {
    const its = items.map((it) => [it, ...(it.children ?? [])]).flat();
    const index = its.findIndex((it) => it.link === pathname);
    if (index >= 0) return [its[index].key];
    return [];
  }, []);

  const selectedKeys = useMemo(
    () => getSelectedKeys(location.pathname, items as any[]),
    [getSelectedKeys, items, location.pathname]
  );

  const onClick: MenuProps["onClick"] = useCallback(
    ({ key }: { key: string }) => {
      const keys = key.split("_").map((k) => parseInt(k));
      if (keys[0] >= 0) {
        if (keys.length === 2) {
          const children = menus[keys[0]].children;
          if (children) {
            const link = getLink(children[keys[1]].link);
            if (link) history(link);
          }
        } else {
          const link = getLink(menus[keys[0]].link);
          if (link) history(link);
        }
      }
      if (showMin) setShowMin(false);
    },
    [getLink, history, menus, showMin]
  );

  return (
    <Fragment>
      <div
        onClick={() => setShowMin(false)}
        className={`fixed top-0 left-0 _z-1 w-full h-full _siders-hide-mini ${showMin ? "block" : "hidden"}`}
      ></div>
      <div
        className={`_sider-btn-mini px-1 _z-2 py-1 justify-center items-center text-white${
          showMin ? " _sider-btn-mini-show" : ""
        }`}
      >
        {showMin ? (
          <AiFillCaretLeft onClick={() => setShowMin(false)} size={28} />
        ) : (
          <AiFillCaretRight onClick={() => setShowMin(true)} size={28} />
        )}
      </div>
      <div
        className={`border-r pr-1 sticky _z-3 border-b overflow-hidden bg-white _scroolbar left-0 _siders${
          showMin ? " _sider-show" : ""
        }`}
      >
        <div className="w-full px-2 py-5 overflow-y-auto _max-h-inherit">
          <Menu
            className="border-none _sider"
            mode="inline"
            items={items as ItemType[]}
            onClick={onClick}
            selectedKeys={selectedKeys}
            defaultOpenKeys={defaultOpenKeys as string[]}
          />
        </div>
      </div>
    </Fragment>
  );
};

export const SiderUser = () => {
  return <SiderCpn menus={menuUsers} />;
};

export const SiderEmployer = () => {
  return <SiderCpn menus={menuEmployer} />;
};

export const SiderAdmin = () => {
  return <SiderCpn menus={menuAdmin} />;
};
