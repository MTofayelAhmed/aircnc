import Container from "./../shared/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";

const Categories = () => {
  return (
    <Container>
      <div className=" flex flex-row items-center justify-between pt-4 overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox label = {item.label} icon = {item.icon} key ={item.label}></CategoryBox>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
