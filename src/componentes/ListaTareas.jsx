
import { Contexto } from '../contexto/contexto'
import TarjetaTarea from './TarjetaTarea'
import {useContext} from 'react'  
function ListaTareas() {    
   const {tareas}=useContext(Contexto)
    
  return (
    <>
    <div>
        {
            tareas.map(tareas=>(
             <TarjetaTarea key ={tareas.id} tarea ={tareas}/>
            ))
        }
    </div>
    </>
  )
}

export default ListaTareas