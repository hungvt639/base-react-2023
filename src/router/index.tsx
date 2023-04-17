import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRouter from "./private";

type RoutersProps = {};

const Routers = (props: RoutersProps) => {
  return (
    <Router>
      <Routes>
        <PrivateRouter />
      </Routes>
    </Router>
  );
};

export default Routers;
