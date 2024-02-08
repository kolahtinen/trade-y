import React, {useContext, useState} from "react";
import GlobalStateContext from "../StateContext";
import { Link } from "react-router-dom";

const Signup = () => {

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
        setError('Cannot sign up: The given email is already taken.')
    }
  };

  return (
    <div>
      <h2>Sign up</h2>
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
        <button type="submit">Sign up</button>
        {error && <p>{error}</p>}
        <Link to="/login">
          Already have an account? Click here to log in.
        </Link>
      </form>
    </div>
  );
}

export default Signup;