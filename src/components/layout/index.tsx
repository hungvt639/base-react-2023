import { Fragment, ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { SiderUser } from "./sider";
import { AuthUser } from "./auth";

import "./style.scss";

export interface LayoutProps {
  children: ReactNode;
}

export const LayoutUser = (props: LayoutProps) => {
  const { children } = props;
  return (
    <AuthUser>
      <LayoutCpn>
        <div className="relative flex items-start justify-start">
          <SiderUser />
          <div className="flex-1 max-w-full px-2 overflow-hidden">{children}</div>
        </div>
      </LayoutCpn>
    </AuthUser>
  );
};

export const LayoutCpn = (props: LayoutProps) => {
  const { children } = props;

  return (
    <Fragment>
      <Header />
      <div className="flex flex-col justify-between _content-min-h">
        <div className="mx-auto _max-width">{children}</div>
        <Footer />
      </div>
    </Fragment>
  );
};
