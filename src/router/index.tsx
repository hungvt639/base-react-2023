import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRouter from "./private";
import { Suspense, lazy } from "react";
import _ from "./middleware";

const Login = lazy(() => import("pages/login"));
const App = lazy(() => import("pages/app"));
const Home = lazy(() => import("pages/home"));
type RoutersProps = {};

const Routers = (props: RoutersProps) => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<_ cpn={Login} />} />
          <Route path="/" element={<PrivateRouter />}>
            <Route path="/app" element={<_ cpn={App} code="App" />} />
            <Route path="/" element={<_ cpn={Home} />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Routers;
