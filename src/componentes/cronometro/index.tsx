import { useState } from "react";
import Botao from "../botao";
import { Relogio } from "./relogio";
import ITarefa from "../../interface/tarefas";
import style from './style.module.scss';

interface Props {
  selecionado: ITarefa | undefined
}

export default function Cronometro({ selecionado }: Props) {
  const [tempo, setTempo] = useState<number>();
  if(selecionado?.tempo) {
  //  setTempo(tempoParaSegundos(selecionado?.tempo));
  }
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      Tempo: {tempo}
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao>
        Começar!
      </Botao>
    </div>
  )
}