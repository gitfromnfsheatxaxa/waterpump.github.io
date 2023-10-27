import React from 'react';
import styled from "styled-components";

const CardPhoto = ({el}) => {


    return (
        <Wrappers>
           <div className="beauty">
               <img src={el.image} alt=""/>
           </div>
        </Wrappers>
    );


};

const Wrappers = styled.div`
  .beauty{
    position: relative;
    
  }
`

export default CardPhoto;