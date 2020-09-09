import React from "react";

function getPaint(color) {
  switch (color) {
    case "white":
      return "/img/white-paint-can.jpeg";

    case "green":
      return "/img/green-paint-can.jpeg";

    case "orange":
      return "/img/orange-paint-can.jpg";

    default:
      break;
  }
}

const ProductItem = ({ color }) => {
  return (
    <div className="ProductItem">
      <h3>Logo Paint</h3>

      <div className="container">
        <img src={getPaint(color)} alt="Paint Can" />

        <ul>
          <li>Lorem Ipsum, dolor sit amet amesiqutor</li>
          <li>Lorem Ipsum, dolor sit amet amesiqutor</li>
          <li>Lorem Ipsum, dolor sit amet amesiqutor</li>
        </ul>
      </div>

    </div>
  );
};

export default ProductItem;
