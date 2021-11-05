
import React, { useState, useEffect, FC } from 'react';

interface Iprops {
    msg: string,
    type: string
}

 const Alert : FC<Iprops> = ({ msg, type }) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        if (msg) {
            setShow(true);
            setInterval(() => {
                setShow(false);
            }, 2000);
        }
    }, [msg]);
    return <>{show && <div className={`alert alert-${type}`}>{msg}</div>}</>;
}


export default Alert;
