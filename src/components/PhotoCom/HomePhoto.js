import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const HomePhoto = ({el}) => {


    return (

        <Container>
            <div className="main-img " key={el?._id}>

                <div className="main-card">

                    <Link to={`/${el?._id}`}>

                        <div className="img-card">
                            <img className="img" src={el?.image} alt=""/>
                        </div>

                    </Link>

                </div>

                <div className="text-box">
                    <p>{el?.name}</p>
                </div>

            </div>
        </Container>
    );

};

const Container = styled.div`
  position: relative;
  margin: auto;
  text-align: center;

  .main-img {
    width: 100%;
    background: white;
    border-radius: 3px;

    .main-card {
      height: 250px;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 30px;
      justify-content: center;
      border-bottom: 1px solid #dfdfdf;
    }

    .text-box {
      padding: 5px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 60px;
    }

    @media screen and (min-width: 769px ) and (max-width: 1440px) {
      .text-box {
        height: 70px;
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

      .text-box {
        height: 70px;
      }
    }


    p {
      max-width: 200px;
      color: black;
      font-size: 15px;
      text-align: center;
      height: auto;
      margin: 5px 10px 0 10px;
      cursor: pointer;
    }

  }




`

export default HomePhoto;