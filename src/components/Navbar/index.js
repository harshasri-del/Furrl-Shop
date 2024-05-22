import { PiHandbagSimpleLight } from "react-icons/pi";
import { HiOutlineBookmark } from "react-icons/hi2";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const onClickWishList = () => {
    navigate("/wishlist");
  };

  const onClickCart = () => {
    navigate("/cart");
  };
  const onClickBrand = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <button className="navbar-toggler" onClick={onClickBrand}>
        ☰
      </button>
      <div className="navbar-brand" onClick={onClickBrand}>
        Furrl
      </div>

      <ul className="navbar-icons">
        <li onClick={onClickWishList}>
          <a href="/wishlist" className="icon">
            <HiOutlineBookmark />
          </a>
        </li>
        <li onClick={onClickCart}>
          <a href="/cart" className="icon">
            <PiHandbagSimpleLight />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
