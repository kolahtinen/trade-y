import React, {useContext, useState, useRef} from "react";
import GlobalStateContext from "../StateContext";
import { Link } from "react-router-dom";

const Signup = () => {

    const { globalState, setGlobalState } = useContext(GlobalStateContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const authenticate = (username, password) => {
        return true;
    }

  const signUp = () => {

    if (authenticate(username, password)) {
        setGlobalState((previousState) => ({
            ...previousState,
            loggedIn: true
        }));
    } else {
        setError('Cannot sign up with the given credentials.')
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
        signUp();
      }
    }
  }

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={signUp}>
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
        <Link to="/login">
          Already have an account? Log in here.
        </Link>
      </form>
    </div>
  );
}

export default Signup;