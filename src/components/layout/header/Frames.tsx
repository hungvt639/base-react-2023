import { Button } from "antd";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { HiMenu, HiOutlineArrowRight } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import route from "router/routes";

type FramesProps = { logo?: string; menus: Menu[]; type: 0 | 1 | 2 };
interface MenuminProps extends FramesProps {
  showMenu: boolean;
  closeMenu: () => void;
}

export type Menu = {
  name: string;
  link: string;
};

const Frames = (props: FramesProps) => {
  const { logo, menus, type } = props;
  const location = useLocation();
  console.log("🚀  location:", location);

  // const { user, logout } = useAuth();

  const [showMenu, setShowMenu] = useState(false);

  // const menu = useMemo(
  //   () => (
  //     <div className="bg-white border rounded-md">
  //       {/* {type === 0 && (
  //         <Link href={route.USER.home}>
  //           <p className="px-5 py-1 border-b cursor-pointer">Thông tin cá nhân</p>
  //         </Link>
  //       )}

  //       <p className="px-5 py-1 cursor-pointer" onClick={logout}>
  //         Đăng xuất
  //       </p> */}
  //     </div>
  //   ),
  //   []
  // );
  return (
    <header className="sticky top-0 z-10 bg-white border-b _headers">
      <MenuMin {...props} showMenu={showMenu} closeMenu={() => setShowMenu(false)} />
      <div className="flex items-center justify-between px-3 mx-auto _max-width">
        <div className="flex items-center justify-start cursor-pointer">
          <Link to={route.HOME}>
            <div className="mr-5 _logo">
              <img className="w-full" src={logo} alt="logo" />
            </div>
          </Link>
          <menu className="flex items-center justify-start _show">
            {menus.map((menu, i) => (
              <div
                key={i}
                // className={`text-base font-semibold mr-5${path === menu.link ? " border-b-4  border-stone-500" : ""}`}
              >
                <Link className="uppercase" to={menu.link}>
                  {menu.name}
                </Link>
              </div>
            ))}
          </menu>
        </div>
        <div className="text-base font-semibold _show ">
          <div className="flex items-center justify-start h-full ">
            {type === 0 && (
              <Link to={route.EMPLOYER.landing}>
                <Button className="flex items-center mr-5 uppercase" type="primary">
                  <span className="mr-3 text-base font-semibold">Nhà tuyển dụng</span> <HiOutlineArrowRight size={24} />
                </Button>
              </Link>
            )}
            {type === 1 && (
              <Link to={route.HOME}>
                <Button className="flex items-center mr-5 uppercase" type="primary">
                  <span className="mr-3 text-base font-semibold">Tìm việc làm</span> <HiOutlineArrowRight size={24} />
                </Button>
              </Link>
            )}
            {/* {user ? (
              <Dropdown arrow overlay={menu} placement="bottomRight">
                <div className="cursor-pointer">
                  <span>{user.fullname}</span>
                  <Avatar className="border" src={user?.avatar} />
                </div>
              </Dropdown>
            ) : (
              <Link className="uppercase" to={route.LOGIN}>
               Đăng nhập
              </Link>
            )} */}
          </div>
        </div>
        <div className="_hide">
          <HiMenu className="cursor-pointer" onClick={() => setShowMenu(true)} size={32} />
        </div>
      </div>
    </header>
  );
};

export default Frames;

const MenuMin = (props: MenuminProps) => {
  const { menus, type, showMenu, closeMenu } = props;
  // const { user, logout } = useAuth();

  return (
    <div className="_menu-min">
      <div
        onClick={closeMenu}
        className={`h-full fixed top-0 left-0 w-full z-10 _close ${showMenu ? "block" : "hidden"}`}
      />
      <div
        className={`fixed top-0 right-0 h-full z-10 w-0 text-white py-5 _menu-min-content ${
          showMenu ? "_menu-min-content-show" : ""
        }`}
      >
        <div className="px-3 ">
          <div className="flex justify-end pb-10 border-b-2">
            <MdOutlineClose className="text-white cursor-pointer" size={36} onClick={closeMenu} />
          </div>

          <div className="pt-1 pb-2 mt-5 border-b-2">
            {menus.map((menu, i) => (
              <Link to={menu.link} key={i}>
                {/* <a> */}
                <div className="px-3 py-2 my-1 text-lg font-semibold text-white uppercase hover:bg-green-700">
                  {menu.name}
                </div>
                {/* </a> */}
              </Link>
            ))}
          </div>
          <div className="pt-1 pb-2 mt-5 mb-10 border-b-2">
            {/* {user ? (
              <div>
                <Link href={route.USER.home}>
                  <a>
                    <div className="px-3 py-2 text-base font-semibold hover:bg-green-700">
                      <Avatar className="mr-3 border cursor-pointer" src={user?.avatar} />
                      <span className="text-white hover:underline">{user.fullname}</span>
                    </div>
                  </a>
                </Link>

                <div
                  onClick={logout}
                  className="flex items-center py-2 pl-4 pr-3 text-base font-semibold cursor-pointer hover:bg-green-700"
                >
                  <TbLogout size={24} className="mr-5" /> <span className="hover:underline">Đăng xuất</span>
                </div>
              </div>
            ) : (
              <div>
                <Link href={route.LOGIN}>
                  <a>
                    <div className="px-3 py-2 my-1 text-lg font-semibold text-white uppercase hover:bg-green-700">
                      Đăng nhập
                    </div>
                  </a>
                </Link>
                <Link href={route.REGISTER}>
                  <a>
                    <div className="px-3 py-2 my-1 text-lg font-semibold text-white uppercase hover:bg-green-700">
                      Đăng ký
                    </div>
                  </a>
                </Link>
              </div>
            )} */}
          </div>
          {type === 0 && (
            <Link to={route.EMPLOYER.landing}>
              <Button className="mr-5 text-white uppercase border-2 hover:bg-green-700" size="large" type="ghost">
                Dành cho nhà tuyển dụng
              </Button>
            </Link>
          )}
          {type === 1 && (
            <Link to={route.HOME}>
              <Button className="mr-5 text-white uppercase border-2 hover:bg-green-700" size="large" type="ghost">
                Tìm kiếm việc làm
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
