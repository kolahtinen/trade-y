import React, {useContext, useState} from "react";
import GlobalStateContext from "../StateContext";
import { Link } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const authenticate = (username, password) => {
        return true;
    }

    const { globalState, setGlobalState } = useContext(GlobalStateContext);
    
    const login = () => {
        setGlobalState((previousState) => ({
            ...previousState,
            loggedIn: true
        }));
    }

  const handleLogin = (e) => {
    e.preventDefault();

    if (authenticate(password)) {
      login();
    } else {
        setError('Something went wrong - user was not able to login.')
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
        <Link to="/signup">
          Don't have an account yet? Sign up here.
        </Link>
      </form>
    </div>
  );
}

export default Login;