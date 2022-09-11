import Home from "./home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Foods from "./foods";
const Pages = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/foods" element={<Foods></Foods>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Pages;
