import { LayoutUser } from "components/layout";
import { Outlet } from "react-router-dom";

type PrivateRouterProps = {};

const PrivateRouter = (props: PrivateRouterProps) => {
  return (
    <LayoutUser>
      <Outlet />
    </LayoutUser>
  );
};

export default PrivateRouter;
