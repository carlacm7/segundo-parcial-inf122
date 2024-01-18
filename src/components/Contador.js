import React from "react"  
import '../styles/Contador.css';

function Contador({nombre,nroClicks,clase}){
    
    return (
            <div className="cont-container">
                <p className={clase}>{nombre}:{nroClicks}</p>
            </div>
             
    );
}

export default Contador;