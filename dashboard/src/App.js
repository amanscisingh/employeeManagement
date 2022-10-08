import './App.css';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import {useState} from 'react';

function App() {
  const loginInfo = useSelector(state => state.loginInfo);
  const userInfo = useSelector(state => state.userInfo);
  const appControls = useSelector(state => state.appControls);
  const isloggedIn = loginInfo.isloggedIn;
  const dispatch = useDispatch();

  const [isLoginView, setIsLoginView] = useState(true);

  if(appControls.isError) {
    alert(appControls.errorMessage);
    dispatch({
      type: 'CLEAR_ERROR_MESSAGE'
    });
  }

  return (
    <div className="App">
      { isloggedIn ? <Dashboard />  : isLoginView ? <Login /> : <Register /> }

      { isloggedIn ? "" : <button onClick={ () => setIsLoginView(!isLoginView) }>Toggle Login/Register</button> }
      
    </div>
  );
}

export default App;
