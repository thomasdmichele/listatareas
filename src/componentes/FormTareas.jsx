import { useState, useContext } from "react"
import {Contexto} from '../contexto/contexto'


function FormTareas() {
    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
const {crearTarea} = useContext(Contexto)

    const manejoDatos = (e)=> {
        e.preventDefault();
        console.log(description);
        crearTarea({
          title,
          description
        })
        setTitle('')
        setDescription('')
    }

  return (
    <div>
        <form onSubmit={manejoDatos}>
            <input placeholder="escribe mi" 
            onChange={(e)=>setTitle(e.target.value)} value={title} autoFocus/>
            <textarea placeholder="escribe la descripcion" onChange={(e)=>{setDescription(e.target.value)}} value={description}></textarea>
            <button >enviar
            </button>
        </form>
    </div>
  )
}

export default FormTareas