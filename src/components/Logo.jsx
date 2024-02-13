import React from "react";
import '../styles/Logo.css';

function Logo ({imagen, alt}) {
    return(
        <div className='logo-contenedor'>
            <img
                src={imagen}
                className='logo'
                alt={alt}
            />
        </div>
    );
}

export default Logo