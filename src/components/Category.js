import { Link } from "react-router-dom";

const Category = (props) => {
  return (
    <div>
      <div>
        <Link to={`./${props.category}`}>
          <img
            alt={props.category}
            src={`/assets/category/${props.category}.png`}
          ></img>
        </Link>
      </div>
      {props.category}
    </div>
  );
};

export default Category;
