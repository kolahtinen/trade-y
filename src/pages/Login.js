import React, {useContext, useState, useRef} from "react";
import GlobalStateContext from "../StateContext";
import { Link } from "react-router-dom";

const Login = () => {

    const { globalState, setGlobalState } = useContext(GlobalStateContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const authenticate = (username, password) => {
        return true;
    }

  const login = () => {

    if (authenticate(password)) {
        setGlobalState((previousState) => ({
            ...previousState,
            loggedIn: true
        }));
    } else {
        setError('Something went wrong - user was not able to login.')
    }
  };

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (event.target === usernameRef.current) {
        passwordRef.current.focus();
      } else if (event.target === passwordRef.current) {
        usernameRef.current.focus();
        login();
      }
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={login}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            ref={usernameRef}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            ref={passwordRef}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
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