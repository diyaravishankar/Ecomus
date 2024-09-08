import "./MainPage.css";
import arrow from "../../SVGs/arrow.svg";
import arrownothovered from "../../SVGs/arrownothovered.svg";
import collection from "../../SVGs/mainimg.jpg";

import { useState } from "react";
import Product from "../../Components/Product";

import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";

// Default values shown  


function MainPage(props) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const shopCollection = () => {
    navigate("/shop");
  }

  return (
    <div>
      <div className="containerr">
        <div className="itemm onee">
          <div className="bigtitle">
            <p className="largee">Good Organic</p>
    
            <p className="largee">Raw Vegetables</p>
            <p className="textt">
              Shop exclusive pieces from our organic farms
            </p>
          </div>

          <div className="shop">
            <button
              onClick={shopCollection}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Shop collection{" "}
              <img src={hovered ? arrow : arrownothovered} alt="arrow" />
            </button>
          </div>
        </div>
        <div className="itemm twoo">
          {" "}
          <img src={collection} alt="watch"></img>
        </div>
      </div>
      <div className="scrolling-text-container">
        <div className="scrolling-text">
          Bidding Scheme &nbsp;&nbsp;
          &nbsp;&nbsp; |&nbsp;&nbsp; &nbsp;&nbsp; Fixed Prices
          &nbsp;&nbsp; &nbsp;&nbsp;|&nbsp;&nbsp; &nbsp;&nbsp; Blockchain based contracts
        </div>
      </div>
      <div className="Products">
        <Product
          onAddCartClick={props.onAddCartClick}
          className="Productt"
          photo="Images/wheat.jpg"
          title={"WHEAT (priced per kg)"}
          price={"₹" + 20.0}
        />
        <Product
          onAddCartClick={props.onAddCartClick}
          className="Productt"
          photo="Images/rice.jpg"
          title={"RICE (priced per kg)"}
          price={"₹" + 80.0}
        />
        <Product
          onAddCartClick={props.onAddCartClick}
          className="Productt"
          photo="Images/lentils.jpg"
          title={"DAAL (priced per kg)"}
          price={"₹" + 100.0}
        />
        <Product
          onAddCartClick={props.onAddCartClick}
          className="Productt"
          photo="Images/vege.webp"
          title={"Cucumber (priced per kg)"}
          price={"₹" + 60.0}
        />
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
