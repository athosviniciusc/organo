import "./Campo.css";

const Campo = (props) => {
  const aoDigitar = (evento) => {
    props.aoAlterado(evento.target.value);
  };
  return (
    <div className={`campo${"-" + (props.type ? props.type : "text")}`}>
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitar}
        type={props.type ? props.type : "text"}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Campo;
