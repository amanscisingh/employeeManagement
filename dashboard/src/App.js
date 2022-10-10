import './App.css';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from './components/Dashboard';
import {useEffect} from 'react';
import { fetchAllEmployee, verifyAccessToken } from './actions/apiActions';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(verifyAccessToken());
  }, []);

  const loginInfo = useSelector(state => state.userReducer);
  console.log(loginInfo);
  // const isloggedIn = loginInfo.isloggedIn;
  const isloggedIn = loginInfo.isloggedIn;

  // const [isLoginView, setIsLoginView] = useState(true);

  // if(appControls.isError) {
  //   alert(appControls.errorMessage);
  //   dispatch({
  //     type: 'CLEAR_ERROR_MESSAGE'
  //   });
  // }

  return (
    <>
      { isloggedIn ? <Dashboard /> : <Login /> }     
    </>
  );
}

export default App;
