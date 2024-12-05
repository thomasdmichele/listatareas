import {createContext, useState, useEffect} from 'react'
import {data} from '../data'    

export const Contexto = createContext();
export function ContextoProvider(props) {
    const [tareas, setTareas] = useState([])

    function crearTarea(tarea){
        setTareas([...tareas,{
          title: tarea.title,
          id:tareas.length,
          description:tarea.description
    
        }])
      }
      function borrarTarea(tareaId){
        setTareas(tareas.filter((tarea) => tarea.id !== tareaId))
    
      }
      useEffect(() =>{
        setTareas(data)
    },[]) 
    
  return ( 
    <>
    <Contexto.Provider value={{
        tareas,
        borrarTarea,
        crearTarea
    }}>
    {props.children}
    </Contexto.Provider>
    </>
  )
}
 