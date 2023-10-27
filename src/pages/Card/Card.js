import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useCart} from 'react-use-cart';
import styled from "styled-components";


const Card = () => {


    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [account, setAccount] = useState("")
    const {items, isEmpty, emptyCart, removeItem} = useCart();


    const TelegramPost = () => {
        if (name.length || phone.length || account.length) {
            axios.post(`https://api.telegram.org/bot5564814493:AAE-fW4LsvsR5azRSdOu24GRpEiuFxt3Em8/sendMessage?chat_id=-1001756381397&text=${encodeURIComponent(
                    `
<b>Details:   </b>
           
<b>Isim:   ${name}</b>
           
<b>Telefon:   ${phone}</b>
           
<b>Accaunt:   ${account}</b>
           
<b>product:${items.map((item) => {
                        return `
<b>${item.name}</b>
<b>${item.price}So'm</b>
                      `
                    })}</b>
           `
                )} &parse_mode=html`
            )
            setName("")
            setAccount("")
            setPhone("")
        }


    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const onKeyDown = e => {
            if (e.keyCode === 13) {
                TelegramPost()

            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, []);
    if (isEmpty) {
        return <p>Sizning Korzinangiz Bosh</p>
    }

    return (
        <Div>
            <div className="w-90">


                <div>
                    <ul>
                        <p>Hamma Buyumlari Ochirib Tashlash</p>
                        <li>
                            <button className="danger" onClick={emptyCart}>Bosh</button>
                        </li>
                        <li>
                            <h2>*Mahsulotni tanlab olganingizdan so'ng, biz siz bilan bog'lanishimiz uchon o'z ma'lumotlaringizni qoldiring</h2>
                        </li>
                    </ul>
                </div>

                <form>
                    <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)}
                           placeholder="  Isim Sharif"/>
                    <input className="input" type="number" value={phone} onChange={(e) => setPhone(e.target.value)}
                           placeholder="  Telefon: +9989"/>
                    <input className="input" type="text" value={account}
                           onChange={(e) => setAccount(e.target.value)}
                           placeholder="  Account @tme"/>
                    <button id="enter" className="btn" disabled={!account}
                            onClick={() => TelegramPost()}>Yuborish
                    </button>
                </form>
            </div>
            <div className="container">
                {items.map((item) => {
                    return (
                        <div key={item?._id} className="first">
                            <div className="main">

                                <img src={item?.image} alt=""/>
                                <div className="second">
                                    <p key={item?.name}>{item?.name}</p>
                                    <button className="danger" onClick={() => removeItem(item?.id)}>
                                        Olib Tashlash
                                    </button>
                                </div>

                            </div>

                        </div>
                    )
                })}
            </div>
        </Div>
    );
};
const Div = styled.div`
  width: 100%;

  .w-90 {
    width: 90%;
    margin: auto;
  }
h2{
  margin: 30px 0 10px 0;
  color: darkgrey;
  text-align: left;
}

  @media screen and (max-width: 1028px) {
    .btn {
      margin: 10px 0;
      width: 100%;
      height: 50px;
      border-radius: 5px;
      padding: 5px;
      border: none;
      color: white;
      background: #025b69;
      outline: 1px solid grey;
    }
  }

  li {
    list-style: none;
  }


  .container {
    width: 90%;
    margin: 10px auto;
    grid-gap: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    .first {
      margin: 10px auto;
      grid-gap: 5px;
      display: grid;

      .main {
        width: 100%;
        margin: 10px auto;
        display: flex;
        flex-direction: column;
        text-align: center;

        img {
          width: 90%;
          margin: auto;
          cursor: pointer;
          object-fit: contain;
          transition: all ease-in-out .3s;
          -moz-transition: all ease-in-out .3s;
          -webkit-transition: all ease-in-out .3s;
          -o-transition: all ease-in-out .3s;
          -ms-transition: all ease-in-out .3s;
        }

        p {
          max-width: 200px;
          margin-top: 7px;
          color: #017486;
          line-height: 18px;
          font-size: 15px;
          text-align: center;
          object-fit: cover;
        }

        .second {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }

  @media screen and (min-width: 10px ) and (max-width: 769px) {
    .container {
      width: 99%;
      display: grid;
      grid-gap: 5px;
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
  @media screen and  (min-width: 769px)and (max-width: 912px) {
    .container {
      width: 99%;
      display: grid;
      grid-gap: 5px;
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

  .btn {
    margin: 10px 0;
    width: 300px;
    height: 50px;
    border-radius: 5px;
    padding: 5px;
    border: none;
    color: white;
    background: #025b69;
    outline: 1px solid grey;
  }

`
export default Card;