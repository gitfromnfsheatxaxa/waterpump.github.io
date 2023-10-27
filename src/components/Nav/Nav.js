import React, {useState} from "react"
import "./Sty.css"
import {Link} from "react-router-dom";
import {faAlignJustify, faAlignRight, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Logo from "../../image/Без названия (1).jpg"
import {signInWithGoogle} from "../../firebase/config";
// import logo2 from "../../image/Без названия.png"
import {Nav,} from "react-bootstrap";

const NavbarCom = () => {
    const [Mobile, setMobile] = useState(false)
    return (<>
        <header>
            <div className="dark-cyan">

            </div>
            <div className='container'>
                <nav>
                    <Nav.Link href="/">
                        <img className="logo" id="img" src={Logo} alt=''/>
                    </Nav.Link>
                    {/*<Link to="/">*/}
                    {/*    <img id="img2"  className="logo" src={logo2} alt=""/>*/}
                    {/*</Link>*/}
                    <ul onMouseLeave={() => setMobile(false)} className={Mobile ? "navMenu-list" : "flexSB"} >


                        <li>
                            <Nav.Link href='/about'><p className="p">Suv Nasoslari</p></Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href='/about'><p className="p">Suv Filterlari</p></Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href='/products'><p className="p">Hamma Productlarimiz</p></Nav.Link>
                        </li>
                        <div className="x" onClick={() => setMobile(false)}>
                            X
                        </div>
                    </ul>
                    <div className="dis ">
                        <Nav.Link href="">
                            <button onClick={signInWithGoogle} className="success">
                                Login
                            </button>
                        </Nav.Link>
                        <div>
                            <Nav.Link href="/card">
                                <FontAwesomeIcon className="cart" icon={faShoppingCart}/>
                            </Nav.Link>
                        </div>

                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <FontAwesomeIcon className="burger" icon={faAlignRight}/> :
                                <FontAwesomeIcon className="burger" icon={faAlignJustify}/>}
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    </>)
}

export default NavbarCom
