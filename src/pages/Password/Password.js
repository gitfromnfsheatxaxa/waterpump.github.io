import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import "../../index.css"



const Password = () => {

    const navigate = useNavigate("")
    const [password, setPassword] = useState("")
    const tokenAdmin = "tokenAdmin"


    return (
        <div>

            <input className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="passsword yoz"
                type="password" />
            {password === "nigger" ? (
                <button className="success" onClick={() => {
                    navigate("/admin")
                    localStorage.setItem("tokenAdmin", tokenAdmin)
                }}>
                    Click
                </button>
            ) : (
                <button  className="success"  onClick={() =>
                    navigate('/')
                }>
                    Click
                </button>
            )}
        </div>
    );
};

export default Password;