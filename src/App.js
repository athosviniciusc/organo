import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";
import Time from "./components/Time";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programadores",
      cor: "#d9f7e9",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#e8f8ff",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#f0f8e2",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#fde7e8",
    },
    {
      id: uuidv4(),
      nome: "Ux e Design",
      cor: "#eae9f5",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#fff5d9",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#ffeedf",
    },
  ]);

  function deletarColaborador(id) {
    setColaboradores(
      colaboradores.filter((colaborador) => {
        return colaborador.id !== id;
      })
    );
  }
  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function aoFavoritar(id) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      })
    );
  }
  return (
    <div>
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoColoaboradorCadastrado={(colaborador) => {
          aoNovoColaboradorAdicionado(colaborador);
        }}
      />
      {times.map((time) => (
        <Time
          mudarCor={mudarCorDoTime}
          key={time.nome}
          id={time.id}
          nome={time.nome}
          aoFavoritar={aoFavoritar}
          aoDeletar={deletarColaborador}
          cor={time.cor}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
