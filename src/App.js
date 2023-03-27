import { Route,Routes } from 'react-router';
import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import { Signup } from './components/Signup';
import { UserAuthContextProvider } from './context/UserAuthContext';


function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
      <Routes>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/' element={<Login />}></Route>
      <Route path='/home' element={<ProtectedRoutes><Home /></ProtectedRoutes>}></Route>
      </Routes>
      </UserAuthContextProvider>
      
    </div>
  );
}

export default App;
