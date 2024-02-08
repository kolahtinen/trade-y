import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Sales from './pages/Sales';
import Signup from './pages/Signup';
import Header from './components/Header';
import GlobalStateContext from './StateContext';
import { useContext } from 'react';

function App() {
  const { globalState, setGlobalState } = useContext(GlobalStateContext);

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route 
            path='/login'
            element={globalState.loggedIn ? 
              <Navigate to="/" replace/> : 
              <Login/>}
          />
          <Route path='/signup'element={<Signup/>}/>
          <Route path='/sell' element={<Sales/>}/>
        </Routes>        
      </Router>
    </div>
  );
}

export default App;
