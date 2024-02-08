import React from "react";
import { Link } from "react-router-dom";
import GlobalStateContext from "../StateContext";
import { useContext } from "react";

const LoginButton = () => {
    const { globalState, setGlobalState } = useContext(GlobalStateContext);

    const logout = () => {
        setGlobalState((previousState) => ({
            ...previousState,
            loggedIn: false
        }));
    }

    return (
        <div>
            {!globalState.loggedIn ?
            <Link to="login">Login</Link> :
            <button onClick={logout}>Log out</button>
            }
        </div>
    )
};

export default LoginButton;