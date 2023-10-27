import React, {useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import {Context} from "./Context";
import styled from "styled-components";
import ProductsPhoto from "./components/ProductsPhoto/ProductsPhoto";
import TelCardCom from "./components/TelCardCom/TelCardCom";

const FileInfo = () => {


    const {array} = useContext(Context)
    const {id} = useParams()
    const singlePhoto = array.find(el => {
        return el._id == id
    })
    const NewArray = array.filter((el) => el.category === singlePhoto.category)
    return (

        <FileInfoStyle>
            <div className="main">
                <div key={id} className="shift">
                    <img src={singlePhoto?.image} alt=""/>
                    <p>{singlePhoto?.name}</p>
                </div>
            </div>
            <div className="container">
                <div className="Nice">
                    {
                        NewArray.slice(1).map(el => {
                            return <ProductsPhoto el={el}/>
                        })
                    }
                </div>
            </div>
            <TelCardCom/>
        </FileInfoStyle>
    );
};

const FileInfoStyle = styled.div`
  width: 100%;

  .main {
    width: 30%;
    display: flex;
    margin: auto;
    padding: 25px;


    .shift {
      color: black;
      text-align: center;

      img {
        width: 100%;
        transition: all ease-in-out .3s;
        -moz-transition: all ease-in-out .3s;
        -webkit-transition: all ease-in-out .3s;
        -o-transition: all ease-in-out .3s;
        -ms-transition: all ease-in-out .3s;
        border-radius: 10px;
      }
    }
  }

  .container {
    margin: auto;
    padding: 20px 10px 20px 10px;

    .Nice {
      width: 87%;
      margin: 10px auto;
      grid-gap: 10px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;

    }

    @media screen and (min-width: 10px ) and (max-width: 769px) {
      .Nice {
        width: 99%;
        display: grid;
        grid-gap: 5px 0;
        grid-template-columns: 1fr 1fr;
        margin: auto;

        img {
          width: 100%;
          transition: all ease-in-out .3s;
          -moz-transition: all ease-in-out .3s;
          -webkit-transition: all ease-in-out .3s;
          -o-transition: all ease-in-out .3s;
          -ms-transition: all ease-in-out .3s;
        }
      }
    }
    @media screen and (min-width: 769px ) and (max-width: 1024px) {
      .Nice {
        width: 100%;
        display: grid;
        grid-gap: 5px;
        grid-template-columns: 1fr 1fr 1fr;
        margin: auto;
        padding: 20px;

        img {
          width: 100%;
          transition: all ease-in-out .3s;
          -moz-transition: all ease-in-out .3s;
          -webkit-transition: all ease-in-out .3s;
          -o-transition: all ease-in-out .3s;
          -ms-transition: all ease-in-out .3s;
        }
      }
    }

    img {
      width: 100%;
      transition: all ease-in-out .3s;
      -moz-transition: all ease-in-out .3s;
      -webkit-transition: all ease-in-out .3s;
      -o-transition: all ease-in-out .3s;
      -ms-transition: all ease-in-out .3s;
      cursor: pointer;
      max-height: 152px;
      max-width: 203px;
      vertical-align: middle;
      overflow: clip;
    }

  }

`

export default FileInfo;