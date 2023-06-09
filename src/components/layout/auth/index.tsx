import { Fragment, ReactNode } from "react";

interface AuthProps {
  children: ReactNode;
}

export function AuthUser({ children }: AuthProps) {
  //   const { user, firstLoading, isEmployer, isAdmin, isUser } = useAuth();

  //   useEffect(() => {
  //     if (!firstLoading && !user?.id) router({ pathname: route.LOGIN, search: `?back=${router.asPath}` });
  //     else if (!firstLoading && isEmployer)
  //       router({
  //         pathname: route.EMPLOYER.recruitment,
  //       });
  //     else if (!firstLoading && isAdmin)
  //       router.push({
  //         pathname: route.ADMIN.home,
  //       });
  //   }, [router, user, firstLoading, isEmployer, isAdmin]);

  //   if (!isUser) return <Loading show />;

  return <Fragment>{children}</Fragment>;
}
