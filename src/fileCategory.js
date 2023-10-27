import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import {Context} from "./Context";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Category = ({el}) => {
    const {array} = useContext(Context)
    const {id} = useParams()
    const singlePhoto = array.find(el => {
        return el.id === id
    })



    return (
        <FileInfoStyle>

            {/*<Link to={`/${el.id}`}>*/}

            {/*</Link>*/}
            {/*<div className="shift">*/}
            {/*    <img src={singlePhoto.image} alt={singlePhoto.username}/>*/}
            {/*    <h1>{singlePhoto.username}</h1>*/}
            {/*</div>*/}
            {/*<Link to="/card">*/}
            {/*    <button>qwertyuio</button>*/}
            {/*</Link>*/}
        </FileInfoStyle>
    );
};

const FileInfoStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 15px;
  margin: auto;
  max-width: 75%;
  padding: 25px;

  .shift {
    color: white;

    img {
      width: 350px;
      height: 350px;
      border-radius: 10px;
    }
    h1 ,h3 {
      color: black;
    }
    button{
      color: darkblue;
    }
  }

`

export default Category;