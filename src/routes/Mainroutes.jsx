import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Createrecipes from "../pages/Createrecipes";
import Singlerecipe from "../pages/Singlerecipe";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/details/:id" element={<Singlerecipe />} />
      <Route path="/createrecipes" element={<Createrecipes />} />
    </Routes>
  );
};

export default Mainroutes;
