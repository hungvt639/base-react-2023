import logo from "@img/Job_logo.png";
import Frames, { Menu } from "./Frames";
import { useMemo } from "react";
import route from "@/router/routes";
type HeaderUserProps = {};

const Header = (props: HeaderUserProps) => {
  const menus: Menu[] = useMemo(
    () => [
      {
        name: "Trang chủ",
        link: route.HOME,
      },
      {
        name: "Việc làm",
        link: route.JOB,
      },
      {
        name: "Blog",
        link: route.BLOG,
      },
    ],
    []
  );

  return <Frames type={0} menus={menus} logo={logo} />;
};
export default Header;
