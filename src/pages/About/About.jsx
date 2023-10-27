import React from 'react';
import "../../index.css"
import styled from "styled-components";
import img1 from "../../image/photo_2023-08-10_12-33-46.jpg"
import img3 from "../../image/photo_2023-08-10_12-34-06.jpg"
import img5 from "../../image/photo_2023-08-10_12-34-10.jpg"

const About = () => {
    const  addNum = () => {

    }

    return (
        <Div>

            <h2>Bu websayt online bozor hisoblanadi.Bu yerda sizga kerakli bo'lgan mahsulotingizni sotib
                olishingiz mumkin.Qanday qilib bu saytdan foydalanish ketmaketligini korsatamiz. buning uchun siz. </h2>
            <h2>1. Siz harid qilmoqchi bo'lgan mahsulot turini tanlang.</h2>
            <img src={img1} alt=""/>
            <h2>2. tanlagan mahsulotingizni korzinaga solishingiz kerak.Korzinaga
                solish uchun "Add To Card" tugmasini bosishingiz kifoya.</h2>
            <img src={img3} alt=""/>
            <h2>3. Ma'hsulotni tanlaganingizdan song biz siz bilan bog'lanib sizga ma'hsulotni
                yetkazishimiz uchun siz o'z ma'lumotlaringizni bizga jo'natishingiz kerak boladi va biz siz bilan tez
                orada bog'lanamiz. </h2>
            <img src={img5} alt=""/>


        </Div>
    );
};
const Div = styled.div`
  width: 80%;
  margin: 200px auto;

 
  h2 {
    color: grey;
    margin: 50px 0 50px 0;
  }

  img {
    margin: 0 50px;
    width: 600px;
    vertical-align: center;
    transition: all ease-in-out .3s;
    -moz-transition: all ease-in-out .3s;
    -webkit-transition: all ease-in-out .3s;
    -o-transition: all ease-in-out .3s;
    -ms-transition: all ease-in-out .3s;
  }

  @media screen and (min-width: 10px ) and (max-width: 1080px) {
    img {
      margin: 0 5px;
      width: 100%;
      vertical-align: center;
      transition: all ease-in-out .3s;
      -moz-transition: all ease-in-out .3s;
      -webkit-transition: all ease-in-out .3s;
      -o-transition: all ease-in-out .3s;
      -ms-transition: all ease-in-out .3s;
    }
  }
`
export default About;