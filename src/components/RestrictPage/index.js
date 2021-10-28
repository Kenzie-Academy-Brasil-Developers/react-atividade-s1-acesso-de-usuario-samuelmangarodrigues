import "./style.css";

const RestrictPage = ({ Login, Logout, user, isLogedIn }) => {
  return (
    <div>
      {isLogedIn ? (
        <div>
          <h1>Seja muito bem vindo {user} !</h1>
          <button className="BtnsExit" onClick={Logout}>
            Sair
          </button>
        </div>
      ) : (
        <div>
          <h1>Acesso restrito</h1>
          <button className="Btns" onClick={Login}>
            Entrar
          </button>
        </div>
      )}
    </div>
  );
};
export default RestrictPage;
