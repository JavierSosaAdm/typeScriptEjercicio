import { useEffect, useRef } from "react";

type TareaProps = {
    tarea: string,
    borrarTarea: () => void
}

export const Tarea = ({tarea, borrarTarea}: TareaProps) => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (e:KeyboardEvent) => {
            if (e.key === 'Delete') {
                borrarTarea();
            }
        };

        const current = divRef.current;
        current?.addEventListener('keydown', handleKeyDown);

        return () => {
            current?.removeEventListener('keydown', handleKeyDown);
        };
    }, [borrarTarea])
    return (
        <div
            ref={divRef}
            tabIndex={0}
            className="task"
        >
            <span>{tarea}</span>
            <button onClick={borrarTarea}>Borrar</button>
        </div>
    )
    
};