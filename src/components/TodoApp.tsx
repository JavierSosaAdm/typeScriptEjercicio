import { useState } from "react"
import { ListaTareas } from "./listaTareas"

export const TodoApp = () => {
    const [nuevaTarea, setNuevaTarea] = useState('')
    const [listaTareas, setListaTareas] = useState<string[]>([])
    const handleAddTask = () => {
        if (nuevaTarea.trim() === '') return 
        setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea]) 
        setNuevaTarea('')
    }

    const handleBorrarTarea = (index: number) => {
        setListaTareas(tareas => tareas.filter((_,i) => i !== index))
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    }

    return (
        <div>
            <h1>Lista de tareas</h1>
            <div>
                <input 
                    type="text"
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Nueva tarea" />
            <button onClick={handleAddTask}>Agregar</button>
            </div>
            <ListaTareas listaTareas={listaTareas} borrarTareas={handleBorrarTarea}></ListaTareas>
        </div>
    )
}