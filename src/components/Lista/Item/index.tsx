import { ITarefas } from '../../../types/ITarefas'
import style from './Item.module.scss'

interface Props extends ITarefas {
    selecinaTarefa: (tarS: ITarefas ) => void
}


export default function Item(
    { 
        tarefa, 
        tempo, 
        selecionado, 
        completado, 
        id, 
        selecinaTarefa 
    } : Props
    ) {
    return (
        <>
            <li 
                className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
                onClick={() => !completado && selecinaTarefa(
                {
                    tarefa,
                    tempo, 
                    selecionado,
                    completado,
                    id
                }
            )}>
                <h3>{tarefa}</h3>
                <span>{tempo}</span>
                {completado && <span className={style.concluido} area-label="tarefa completada"></span>}
            </li>
        </>
    )
}
