import style from './style.module.scss';
import Item from "./item";

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
    <aside className={style.listaTarefas}>
      <h2>
        Estudos do dia
      </h2>
      <ul>
        {
          tarefas.map((item, index) => (
            <Item
              key={index}
              {...item}
            />
          ))
        }
      </ul>
    </aside>
  )
}