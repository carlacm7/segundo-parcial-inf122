import React from "react"  
import '../styles/Lista.css';
import Meta from './Meta.js'
import Contador from './Contador.js'
import {useState} from 'react';

function Lista(){
    const [metas, setMetas]= useState([]);
    const [nuevaMeta, setNuevaMeta]= useState('');
    const [cliksDone, setClicksDone]= useState(0);
    const [cliksToDo, setClicksToDo]= useState(0);
    const [hecho, setHecho] = useState(true);
    const done =()=> {
        if (hecho===false){
            setHecho(!hecho);
        };
        
        setClicksDone (cliksDone +1);
        if (cliksToDo>0){
            setClicksToDo(cliksToDo -1);
        };
      };
    const addMeta=()=>{
        if (nuevaMeta.trim() === '') return;
        setMetas([...metas, { id: Date.now(), texto: nuevaMeta }]);
        setNuevaMeta('');
        setClicksToDo(cliksToDo +1);
        if (hecho===true){
            setHecho(!hecho);
        };

      }
    
    const eliminarMeta=(id)=>{
        setMetas((prevMetas) => prevMetas.filter((meta) => meta.id !== id));
        if (cliksToDo>0){
            setClicksToDo(cliksToDo -1);
        };
      }

   
    return (
        <div className="contenedor-principal">
            <h1>Mis metas</h1>
            <div className="add-container">
                <input type="text" name="text" className="add-meta" placeholder="Nueva meta ..." value={nuevaMeta} onChange={(e) => setNuevaMeta(e.target.value)}/>
                <button className="boton" onClick={addMeta}>Agregar</button>
            </div>
            <div className="contadores">
                <Contador clase= "complete" nombre="Completadas" nroClicks={cliksDone}/>
                <Contador clase= "pending" nombre="Pendientes" nroClicks={cliksToDo}/>
            </div>
            
            {metas.map((meta) => (
                <Meta
                    key={meta.id}
                    meta={meta}
                    done={done}
                    hecho={hecho}
                    onDelete={eliminarMeta}
                />
            ))}
        </div>
    );
}

export default Lista;