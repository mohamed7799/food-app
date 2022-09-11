import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import CategoryButton from "./categoryButton";

const Categories = () => {
  return (
    <div className="flex gap-4 justify-center flex-wrap">
      <CategoryButton>
        <FaPizzaSlice></FaPizzaSlice>
        <h3>Italian</h3>
      </CategoryButton>
      <CategoryButton>
        <FaHamburger></FaHamburger>
        <h3>American</h3>
      </CategoryButton>
      <CategoryButton>
        <GiNoodles></GiNoodles>
        <h3>Thai</h3>
      </CategoryButton>
      <CategoryButton>
        <GiChopsticks></GiChopsticks>
        <h3>Japanese</h3>
      </CategoryButton>
    </div>
  );
};

export default Categories;
