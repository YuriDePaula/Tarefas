import { Cronometro } from '../componentes/cronometro';
import Formulario from '../componentes/formulario';
import Lista from '../componentes/lista';
import style from './style.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
