import React, {useState} from 'react';
import PropTypes from 'prop-types';
//inputVALUE = AL PONERLO DENTRO DEL INPUT COMO VALOR DEL VALUE Y AL INTENTAR ESCRIBIR EN LA CAJA, NO PODEMOS DEBIDO A QUE ESTE 
//EL VALOR DE value, es predeterminado por asi decirlo

//COMPONETNE QUE  SE ENCARGA DE ESCRIBIR EN LA CAJA DE TEXTO Y ACTUALIZA LA LISTA AL PRESIONAR ENTER CON LA BUSQUEDA QUE HICISTE
export const AddCategory = ({setCategories}) => {
   
   const [inputValue, setInputValue] = useState('') //LA CAJA NECESITA UN TIPO DE ESTADO, PARA SABER LO QUE EL USUARIO ESTA ESCRIBIENDO

   const handleInputChange = (e) => {
       setInputValue(e.target.value) //SU VALOR SE GUARDA EL INPUTVALUE, PARA PODER OCUPARLO DESPUES EL <h1></h1>
    }

   const handleSubmit = (e) =>{
     e.preventDefault();

     if(inputValue.trim().length > 2){
      setCategories (cats => [inputValue, ...cats] )
      setInputValue('')
     }
   }
    

    return (
        <form onSubmit = {handleSubmit}>
          <h1>{inputValue}</h1>
          <input type="text" value={inputValue}  onChange={handleInputChange}/> 
        </form>

    )

    
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
