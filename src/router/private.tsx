import { LayoutUser } from "@/components/layout";

type PrivateRouterProps = {};

const PrivateRouter = (props: PrivateRouterProps) => {
  const {} = props;
  return (
    <LayoutUser>
      <div>Private</div>
    </LayoutUser>
  );
};

export default PrivateRouter;
