import React from 'react';
import styled from 'styled-components'

const Footer = () => {
    return (
        <Div>
            <ul>
                <li>
                    <h4>Add.:<p>No.1, 3rd, Street, East Industry Center, Wenling, Zhejiang, China, 317511</p></h4>
                </li>

                <li>
                    <h4>Tel.:<p>+99899 000-77-08</p></h4>
                    <h4>Tel.:<p>+99899 487-84-60</p></h4>

                </li>
                <li>
                    <h4>Email:<p>xadasad67@gmail.com</p></h4>
                    <h4>Email:<p>waterpumpuz00@gmail.com</p></h4>
                </li>
                <li>
                    <h4>Telegram.: <p>+99899 000-77-08</p></h4>
                    <h4>Telegram.: <p>+99899 487-84-60</p></h4>
                </li>

            </ul>

        </Div>
    );
};
const Div = styled.div`
  width: 100%;
  @media screen and (min-width: 769px ) {
    ul {
      display: flex;
      flex-direction: column;
    }

  }

  ul {
    padding: 10px 0 0 0;
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: auto;
    height: 120px;
    justify-content: space-between;

    li {
      width: 50%;
      margin: auto;
      height: 200px;
      text-align: left;

      h4 {
        font-size: 20px;
      }

      p {
        font-size: 13px;
        color: darkcyan;
      }
    }
  }
`
export default Footer;