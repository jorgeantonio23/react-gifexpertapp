//AGREGAR UN NUEVO ELEMENTO A LA LISTA, CUANDOO SE DE CLICK AL BOTON
    // console.log('Hola')
       /*
       Nota: setCategories es una funcion por lo tanto retorna un valor
       sus valores son la copia de categories y el nuevo elemento que queremos agregar
       [...categories, 'HunterXHunter]'
       */

import React, {useState} from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'
//Functional Component
const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])
    
    
   /*  const handleAdd = () => {                              
       setCategories( [...categories, 'HunterXHunter'] )   
    }*/

    return (
      <>
         <h2>GifExpertApp</h2>
         <AddCategory setCategories={setCategories}/>
         <hr></hr>

        

         <ul>
             {
                 //categories.map() funciona como un ciclo for
                 //para iterar sobre cada uno de los elementos dentro del useState
                 categories.map(category => (
                     <GifGrid key= {category} category={category}></GifGrid>
    ))
             }
         </ul>
      </>
    )
  }

export default GifExpertApp


/*
const GifExpertApp = () => {

    const [categories, setCategories ] = useState(['1, 2, 3, 4'])

    const handleAdd = () => {
        setCategories([...categories, 'MaxSteel'])
    }

    return (
        <>
         <h1>GifExpertApp</h1>
         <hr></hr>

         <button onClick = { handleAdd } > Click ME </button>
         <ul>
            {
             categories.map( category => {
                return <li key={category}>{category}</li>
             })
            }
         </ul>
        </>
    )
}*/