import contact from "../../SVGs/contact.svg";
import contacthover from "../../SVGs/contacthover.svg";
import heart from "../../SVGs/heart.svg";
import hearthover from "../../SVGs/hearthover.svg";
import cart from "../../SVGs/cart.svg";
import carthover from "../../SVGs/carthover.svg";
import Logo from "../../SVGs/Logo.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  const token = localStorage.getItem("token");
  const [cartcount, setcartcount] = useState(0);

  const navigate = useNavigate();
  const displayCartQuantity = async () => {
    const response = await fetch("http://127.0.0.1:8000/cart/", {
      method: "GET",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
    await setcartcount(data.total_quantity_of_products);
    console.log(cartcount)
  }
  useEffect(() => {displayCartQuantity()},[])
  const submitHandler = async () => {
    if (!token) {
      navigate("/login");
      console.log(token);
    } else {
      const response = await fetch("http://127.0.0.1:8000/accounts/profile/", {
        method: "GET",
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      const data = await response.json();
      console.log(data);
      console.log(response);
      console.log(data.shipping_info);
      if (!response.ok) {
        navigate("/login");
      } else {
        if (data.shipping_info === null) {
          console.log("seller")
          navigate("/selleraccount");
          console.log(data)
        } else {
          console.log("buyer")
          navigate("/account");
        }
      }
    }
  };
  const [hovercart, sethovercart] = useState(false);
  const handleMouseEnterCart = () => {
    sethovercart(true);
  };
  const handleMouseLeaveCart = () => {
    sethovercart(false);
  };

  const [hoverh, sethoverh] = useState(false);
  const handleMouseEnterHeart = () => {
    sethoverh(true);
  };
  const handleMouseLeaveHeart = () => {
    sethoverh(false);
  };

  const [hoverc, sethoverc] = useState(false);
  const handleMouseEnterContact = () => {
    sethoverc(true);
  };
  const handleMouseLeaveContact = () => {
    sethoverc(false);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="rightcompnent">
          <ul>
            <h1 className="title">AADHATI 
              
            </h1>
            <a href="/home">
              <li>Home</li>
            </a>
            <a href="/shop">
              <li>Shop</li>
            </a>
            <a href="/shop">
              <li>Products</li>
            </a>
            <a href="/login">
              <li>Pages</li>
            </a>
            <a href="/login">
              <li>Blog</li>
            </a>
            <a href="/login">
              <li>Buynow</li>
            </a>
          </ul>
        </div>
        <div className="icons">
          <img
            className="normalicons"
            onMouseEnter={handleMouseEnterContact}
            onMouseLeave={handleMouseLeaveContact}
            onClick={submitHandler}
            src={hoverc ? contacthover : contact}
            alt="contact"
          />
          <img
            className="normalicons"
            onMouseEnter={handleMouseEnterHeart}
            onMouseLeave={handleMouseLeaveHeart}
            src={hoverh ? hearthover : heart}
            alt="heart"
          />

          <div
            onMouseEnter={handleMouseEnterCart}
            onMouseLeave={handleMouseLeaveCart}
            className="cartcount"
          >
            {" "}
            <img
              src={hovercart ? carthover : cart}
              onClick={() => navigate("/cart")}
              alt="cart"
            />
            {cartcount > 0 ? (
              <div className="countttt">
                <p>{cartcount}</p>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
