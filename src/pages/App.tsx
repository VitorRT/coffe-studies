import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefas } from '../types/ITarefas';
import style from './App.module.scss'

function App() {


  const [tarefas, setTarefas] = useState <Array<ITarefas> | Array<any>> ([])
  const [ selecionado, setSelecionado ] = useState<ITarefas>()

  function handleSelect(tarS: ITarefas) {
    setSelecionado(tarS);
    setTarefas(tarOld => tarOld.map(tar => ({
      ...tar,
      selecionado: tar.id === tarS.id ? true : false
    })))
  }

  function fatalityTask() {
    if(selecionado) {
      setSelecionado(undefined)
      setTarefas(tarOld => tarOld.map(tar => {
        if(tar.id === selecionado.id) {
          return {
            ...tar,
            selecionado: false,
            completado: true
          }
        }
        return tar
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        selecinaTarefa={handleSelect}
        />
      <Cronometro
        selecionado={selecionado}
        fatalityTask={fatalityTask}
        />
    </div>
  );
}

export default App;
