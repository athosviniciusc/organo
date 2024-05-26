import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <div className="redesSociais">
        <img src="/images/fb.png" alt="Facebook"></img>
        <img src="/images/tw.png" alt="Twitter"></img>
        <img src="/images/ig.png" alt="Instagram"></img>
      </div>
      <div className="col-4">
        <img src="/images/logo.png" alt="Logo principal"></img>
      </div>
      <div className="col-4">
        <span>Desenvolvido por Alura.</span>
      </div>
    </footer>
  );
};

export default Rodape;
