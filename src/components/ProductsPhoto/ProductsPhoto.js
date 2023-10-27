import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useCart} from "react-use-cart";

const ProductsPhoto = ({el}) => {

    const {addItem} = useCart();
    return (
        <Container>

            <div className="main-img" key={el?._id}>
                <div className="main-card">
                    <div className="img-card">
                        <img src={el?.image} alt=""/>
                    </div>
                </div>
                <div className="text-box">
                    <p>{el?.name}</p>
                    <button onClick={() => addItem({id: el, price: el.price, image: el.image, name: el.name})}
                            className="btn btn-primary">Add To Card
                    </button>
                </div>

            </div>
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  margin: auto;

  .main-img {
    width: 100%;
    border: 1px solid #dfdfdf;
    margin-bottom: 30px;
    background: white;
    border-radius: 3px;
  }
    .main-card {
      height: 250px;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: center;
      border-bottom: 1px solid #dfdfdf;
    }
    .text-box {
      padding: 5px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 120px;
      justify-content: space-between;
      align-content: space-between;
    }

    @media screen and (min-width: 769px ) and (max-width: 1440px) {
      .text-box {
        height: 110px;
      }
    }
    @media screen and (min-width: 10px ) and (max-width: 769px) {

      img {
        width: 100%;
        vertical-align: center;
        transition: all ease-in-out .3s;
        -moz-transition: all ease-in-out .3s;
        -webkit-transition: all ease-in-out .3s;
        -o-transition: all ease-in-out .3s;
        -ms-transition: all ease-in-out .3s;
      }

      p {
        max-width: 240px;
        color: black;
        font-size: 15px;
        text-align: center;
        height: auto;
        cursor: pointer;
      }

      .text-box {
        height: 140px;
  
      }

      .img-card {
        padding: 20px;
        display: flex;
        align-items: center;
        justify-items: center;
      }
    }


    p {
      color: #017486;
      font-size: 15px;
      text-align: center;
      height: auto;
      margin: 20px 10px 5px 10px;
      cursor: pointer;
    }

    button {
      margin: 10px 0;
      width: 100px;
      height: 30px;
      border-radius: 5px;
      padding: 5px;
      border: none;
      color: white;
      background: #025b69;
      outline: none;

    }

    button:hover {
      background: white;
      color: #025b69;
      border: 1px solid black;
      transition: 0.5s;
    }

  p {
    max-width: 220px;
    font-size: 15px;
    text-align: center;
    height: auto;
    cursor: pointer;
  }




`

export default ProductsPhoto;