import CatergoryItem from "../category-item/category-item.component";
import "./directory.style.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directories-container">
      {categories.map((category) => {
        console.log("cat", category);
        return <CatergoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
