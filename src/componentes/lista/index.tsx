import React from "react";

export default function Lista() {

  const tarefas = [{
    tarefa: 'react',
    tempo: '02:00:00'
  }, {
    tarefa: 'javascript',
    tempo: '01:00:00'
  }, {
    tarefa: 'C#',
    tempo: '10:00:00'
  }]

  return (
    <aside>
      <h2>
        Estudos do dia
      </h2>
      <ul>
        {
          tarefas.map((item, index) => (
            <li>
              <h3> {item.tarefa} </h3>
              <span> {item.tempo} </span>
            </li>))
        }
      </ul>
    </aside>

  )

}