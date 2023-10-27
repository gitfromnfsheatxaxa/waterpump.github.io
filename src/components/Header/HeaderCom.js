import React from 'react';
import styled from 'styled-components'
import MbImg from "../../image/banner2 (1).jpg"

const HeaderCom = () => {
    return (
        <HeaderStyle>
            <div className="good">
                <div className="bad">
                    <h1>MANUFACTURER OF A WIDE VARIETY OF PUMPS</h1>
                </div>
            </div>
            <div className="about">
                <div>
                    <h1>LEO GROUP</h1>
                    <p>LEO GROUP is a national high-tech enterprise engaged in R&D, design, manufacturing, marketing and
                        customer service providing for full range of pumps. LEO is the first listed company in Chinese
                        pump industry.
                    </p>
                    <p>
                        LEO pumps have been sold to over 140 countries and regions from Europe, North America, Central &
                        South America, Southeast Asia, Middle East, Africa, Oceania, etc., and they play a crucial role
                        in water conservancy, water resources, electric power construction, petrochemical industry,
                        mining, metallurgy, fire-fighting, HVAC, agricultural irrigation, civil water supply and
                        drainage, etc.
                    </p>
                </div>
            </div>
        </HeaderStyle>
    );
};

const HeaderStyle = styled.div`
  width: 100%;
  text-align: center;
  @media screen and (max-width: 768px) {
    .good {
      display: none;
    }
  }

  .d-grid {
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    img {
      margin-top: 30px;
      width: 300px;
    }

  }

  .about {
    width: 100%;
    background: #ebebeb;
    padding: 30px 0;

    div {
      width: 80%;
      margin: auto;
      @media screen and (max-width: 912px) {
        width: 90%;
        margin: auto;
      }
    }

    p {
      color: #017486;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
    }

    h1 {
      margin: 0 0 30px;
      text-align: left;
      font-weight: 300;
      color: #017486;
      line-height: 24px;
    }

  }

  .good {
    height: 500px;
    background: url("${MbImg}") no-repeat center center/cover;

    .bad {
      position: relative;
      top: 35%;
      left: 20%;
    }

    h1 {
      color: white;
      font-size: 40px;
      font-weight: 100
    }


    div {
      position: relative;
      top: 1%;
      left: 40%;
      text-align: left;
      width: 500px;
      background: linear-gradient(-45deg, transparent 40px, rgba(0, 76, 84, .8) 0);
      line-height: 40px;
      color: #fff !important;
      text-transform: uppercase;
      padding: 10px 50px 10px 20px;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }




`


export default HeaderCom;







