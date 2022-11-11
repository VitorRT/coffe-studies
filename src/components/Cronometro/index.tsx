import { useState, useEffect } from 'react'
import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefas } from "../../types/ITarefas";

interface Props {
    selecionado: ITarefas | undefined
    fatalityTask: () => void
}

export default function Cronometro ({selecionado,fatalityTask}: Props) {
    const [tempo, setTempo] = useState<number>()

    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])

    function regressiva(count: number = 0) {
        setTimeout(()=> {
            if(count > 0) {
                setTempo(count - 1)
                return regressiva(count - 1)
            }
            fatalityTask()
        }, 1000)
    }

    return (
        <>
            <div className={style.cronometro}>
                <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
                <div className={style.relogioWrapper}>
                    <Relogio tempo={tempo} />
                </div>
                <Botao onClick={() => regressiva(tempo)}>Começar!</Botao>
            </div>
        </>
    )
}

