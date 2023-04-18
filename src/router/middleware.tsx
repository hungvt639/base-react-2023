import { Suspense } from "react";

type CheckPermissionProps<T = any> = {
  cpn: React.LazyExoticComponent<(props: T) => JSX.Element>;
  code?: string;
};

const CheckPermission = (props: CheckPermissionProps) => {
  const { cpn: Cpn, code } = props;
  console.log("🚀  code:", code);
  // if (!code || menu[code])
  return (
    <Suspense fallback={<div>L....!</div>}>
      <Cpn />
    </Suspense>
  );
};

export default CheckPermission;
