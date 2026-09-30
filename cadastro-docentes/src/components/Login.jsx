function Login({ onLogin }) {
  return (
    <div className="container">
      <h2>Login</h2>

      <input type="text" placeholder="Usuário" />
      <input type="password" placeholder="Senha" />

      <button onClick={onLogin}>Entrar</button>
    </div>
  );
}

export default Login;