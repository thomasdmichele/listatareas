import {useContext} from 'react'
import {Contexto} from '../contexto/contexto' 

function TarjetaTarea({tarea} ) {

 const {borrarTarea}=useContext(Contexto)

  return (
   
      <div>
                <h1>{tarea.title}</h1>
                <p>{tarea.description}</p>
                <button onClick={()=>{borrarTarea(tarea.id)}}>eliminar</button>

            </div>
    
  )
}

export default TarjetaTarea