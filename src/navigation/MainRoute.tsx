import { Route, Routes } from "react-router";
import Home from "../presentation/pages/Home";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  );
};

export default MainRoute;
