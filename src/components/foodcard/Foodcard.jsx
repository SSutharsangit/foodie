import Button from "../Button/Button";
import "./Foodcard.css"

function Foodcard({img,title,price}) {
  return (
   <div className="foodcard">
    <div className="cardtop">
    <img src={img} alt="" />
    </div>
    <div className="cardcenter">
    <p>{title}</p>
    <p>Rs. {price}</p>
    </div>
    <div className="cardbottom">
      <Button name="ADD CART"/>
    </div>
   </div>
  );
}

export default Foodcard;