import React from "react"  
import '../styles/Meta.css';


function Meta({meta,onDelete,hecho,done}){
    
    
    
    return (
            <div className="contenedor-meta">
                <p className={hecho? 'hecho':'falta'}>{meta.texto}</p>
                <div className="button-container">
                    <button className="icon" onClick={done}>
                        <img className="image" src={require('../images/check-circle.png')} alt=""/>
                    </button>
                    <button className="icon" onClick={() => onDelete(meta.id)}>
                        <img className="image" src={require('../images/trash1.png')} alt=""/>
                    </button>
                </div>
            </div>
             
    );
}

export default Meta;

