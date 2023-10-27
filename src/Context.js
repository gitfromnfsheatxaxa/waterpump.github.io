import React, {useState, createContext, useEffect} from 'react';


const Context = createContext()

const ConTextProvider = ({children}) => {
    const [array, setArray] = useState([])
    const [subArray, setSubArray] = useState([])

    const url = "https://midnight-sec-back.onrender.com/api/products/"
    const getDate = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setArray(data)
    }

    useEffect(() => {
        getDate()
    }, [])


    return (
        <Context.Provider value={{array, setArray,subArray,setSubArray}}>
            {children}
        </Context.Provider>
    );
};

export {ConTextProvider, Context};
