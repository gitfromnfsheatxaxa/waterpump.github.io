import React, {useContext} from 'react';
import {Context} from "../../Context";
import HomePhoto from "../../components/PhotoCom/HomePhoto";
import styled from 'styled-components'
import HeaderCom from "../../components/Header/HeaderCom";


const Home = () => {
    const {array} = useContext(Context)

    return (

        <Wrapper>
            <HeaderCom/>

            <div className="container">
                <div className="Nice">
                    {
                        array.slice(0,15).map(el => {
                            return <HomePhoto key={el?._id} el={el}/>
                        })
                    }
                </div>
            </div>

        </Wrapper>

    )

};


const Wrapper = styled.div`
  width: 100%;
  background: #dfdfdf;

  .container {
    margin: auto;
    padding: 20px 10px 20px 10px;

    .Nice {
      width: 90%;
      margin: 10px auto;
      grid-gap: 5px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    @media screen and (min-width: 10px ) and (max-width: 769px) {
      .Nice {
        width: 95%;
        display: grid;
        grid-gap: 10px 10px;
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
    @media screen and  (min-width: 769px)and (max-width: 1024px) {
      .Nice {
        width: 100%;
        display: grid;
        grid-gap: 5px;
        grid-template-columns: 1fr 1fr 1fr;
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
export default Home;