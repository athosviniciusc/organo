import Colaborador from "../Colaborador";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

const Time = (props) => {
  const cssH3 = { borderColor: props.cor };
  return (
    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{
          backgroundColor: hexToRgba(props.cor, "0,6"),
          backgroundImage: "url(/images/fundo.png)",
        }}
      >
        <input
          type="color"
          onChange={(evento) => props.mudarCor(evento.target.value, props.id)}
          value={props.cor}
          className="input-cor"
        ></input>

        <h3 style={cssH3}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => {
            return (
              <Colaborador
                aoFavoritar={props.aoFavoritar}
                favorito={colaborador.favorito}
                aoDeletar={props.aoDeletar}
                corDeFundo={props.cor}
                id={colaborador.id}
                key={colaborador.nome}
                imagem={colaborador.imagem}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
