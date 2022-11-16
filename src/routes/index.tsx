import { Outlet, Route, Routes } from "react-router-dom";
import InputBox from "../components/InputBox";
import Timer from "../components/Timer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<InputBox />} />
        <Route path=":command" element={<Timer />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
