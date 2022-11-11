import { ITarefas } from "../../types/ITarefas";
import Item from "./Item";
import style from './Lista.module.scss'

interface Props {
    tarefas: Array<ITarefas>
    selecinaTarefa: (tarS: ITarefas ) => void
}

function Lista({ tarefas, selecinaTarefa }: Props) {

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tar) => (
                    <Item
                        selecinaTarefa={selecinaTarefa}
                        key={tar.id}
                        {...tar}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;
