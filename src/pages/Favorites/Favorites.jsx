import icons from "../../images/icons.svg";
import home from "../../images/home.jpg";

const Favorites = () => {
  return (
    <div>
      <h1>Favorites</h1>

      <svg>
        <use
          href={`${icons}#icon-heart`}
          style={{ width: "30px", height: "30px" }}
        />
      </svg>
      <img src={home} alt="home" style={{ width: "300px", height: "150px" }} />
    </div>
  );
};

export default Favorites;
