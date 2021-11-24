import { BsHeart } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FavoriteIndicator = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button varient="warning" onClick={() => navigate("/favorite")}>
        <BsHeart />
        {/*         <span className="ml-2">{favoriteLength}</span>
         */}{" "}
      </Button>
    </div>
  );
};
export default FavoriteIndicator;
