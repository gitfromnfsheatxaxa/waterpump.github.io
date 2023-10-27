import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useCart} from 'react-use-cart';
import {faShoppingCart,faSearch,faHome,faBox} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TelCardCom = () => {
    const {items} = useCart();

    return (
        <Div>

            <div className="main-tel-card">

                <div className="car-box">
                    <Link to="/">
                        <FontAwesomeIcon className="cart-icon" icon={faHome}/>
                    </Link>
                </div>
                <div className="car-box">
                    <Link to="/card ">
                        <FontAwesomeIcon className="cart-icon" icon={faShoppingCart}/>
                        <sup className="sub">{items.length}</sup>

                    </Link>
                </div>
                <div className="car-box">
                    <Link to="/products">
                        <FontAwesomeIcon className="cart-icon" icon={faBox}/>
                    </Link>
                </div>
            <div className="car-box">
                <Link to="/products">
                    <FontAwesomeIcon className="cart-icon" icon={faSearch}/>
                </Link>
            </div>



            </div>
        </Div>
    );
};
const Div = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #dfdfdf;

  .main-tel-card {
    width: 90%;
    padding: 20px 0;
    margin: auto;
    display: none;
    height: 70px;
  }
.car-box{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: darkcyan;
  
  .sub{
font-size: 17px;
    color: #ffffff;
  }
}
  .cart-icon {
    color: white;
    font-size: 20px;
  }

  @media screen and (min-width: 10px ) and (max-width: 769px) {
    .main-tel-card {
      display: flex;
      align-items: center;
justify-content: space-between;
    }
  }
`
export default TelCardCom;