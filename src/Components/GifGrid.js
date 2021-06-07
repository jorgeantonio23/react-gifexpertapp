//COMPONENTE QUE RECIBA LO QUE SE ECRIBIO EN EL INPUT COMO ARGUMENTO Y QUE RECIBA LOS DATOS DE ESA BUSQUEDA O DEL INPUT

//useEfect me permite ejecutar cierto codigo de manera condicional
import React, { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem';
import {getGifs} from './helpers/getGifs';

//category es la categoria que se recibira como argumento

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(() =>{
        getGifs (category).then(imgs => setImages(imgs))
    }, [category]) //EL SEGUNDO ARGUMENTO QUE SE LE MANDA AL  useState ES UN ARREGLO DE DEPENDENCIAS
            //CUANDO EL ARREGLO VA VACIO QUIERE DECIR QUE SOLO SE VA A EJECUTAR UNA VEZ (LA LLAMADA A LA FUNCION getGifs)
   
    

    return (
        <>
           <div className="card-grid">
              <h3>{category}</h3>
            
                {
                    images.map (img => (
                        <GifGridItem 
                        key={img.id}
                        {...img}
                        />
                    ))
                }
            
            </div>
        </>
    )
}

/* HACER QUE LOS RESUTADOS DE LA  BUSQUEDA SE IMPRIMIERAN EN PANTALLA
<ol>
{   ESTOS CORCHETES SIRVEN PARA PODER PONER DENTRO UNA EXPRESION DE JAVASCRIPT
    images.map (img => (   HACER UN BARRIDO DE TODAS Y CADA UNA DE LAS IMAGENES RESULTANTES CON EL METODO MAP
        <li key = {img.id}>{img.title}</li>  CADA UNO DE MIS IMAGENES TENDRA SU PROPIO TITULO Y SU PROPIA CLAVE 
    ))
}
</ol>
*/