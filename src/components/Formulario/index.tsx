import React from "react";
import Botao from "../Botao";
import style from './Form.module.scss'
import { ITarefas } from '../../types/ITarefas'
import { v4 as uuidv4 } from 'uuid'



class Formulario extends React.Component<{ setTarefas: React.Dispatch<React.SetStateAction<Array<ITarefas>>> }> {

    state = {
        tarefa: '',
        tempo: '00:00'
    }

    handleChange = (ev: any) => {
        ev.preventDefault()
        if (ev.target.name === "tarefa") {
            this.setState({ ...this.state, tarefa: ev.target.value })
        }
        else if (ev.target.name === "tempo") {
            this.setState({ ...this.state, tempo: ev.target.value })
        }
    }

    addTask = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        this.props.setTarefas(tarOld => 
            [
                ...tarOld, 
                { 
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
            );
        this.setState({
            tarefa: '',
            tempo: '00:00'
        })
        //console.log('state: ', this.state)
    }

    render() {
        return (
            <>
                <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
                    <div className={style.inputContainer}>
                        <label htmlFor="tarefa">
                            Adicione um novo estudo
                        </label>
                        <input
                            type="text"
                            name="tarefa"
                            id="tarefa"
                            value={this.state.tarefa}
                            onChange={this.handleChange.bind(this)}
                            placeholder="O que você quer estudar"
                            required
                        />
                    </div>
                    <div className={style.inputContainer}>
                        <label htmlFor="tempo">
                            Tempo
                        </label>
                        <input
                            type="time"
                            step="1"
                            name="tempo"
                            value={this.state.tempo}
                            onChange={this.handleChange.bind(this)}
                            id="tempo"
                            min="00:00:00"
                            max="02:00:00"
                            required
                        />
                    </div>
                    <Botao type="submit">
                        Adicionar
                    </Botao>
                </form>
            </>
        )
    }
}


export default Formulario;