import './App.css';
import {useState,useEffect} from 'react'
import Hospital_login from './components/auth/Hospital_login';
import Hospital_resgistration from './components/auth/Hospital_registration';
import Home from './components/Home';
import Navbar from './components/nav/Navbar';
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
}from 'react-router-dom';
import AuthenticateHandler from './components/AuthenticateHandler';


function App() {
  const [isAuthenticate,setisAuthenticate] = useState(false);

  const privateRoute = (location)=>{
    return isAuthenticate?location:<Navigate to="/hospital_login"/>
  }



  return (
    <>
        <AuthenticateHandler setisAuthenticate={setisAuthenticate}/>
        <Routes>
          <Route exact path='/' element={<Navbar/>}/>
          <Route path='/hospital_login' element={<Hospital_login/>}/>
          <Route path='/hospital_registration' element={<Hospital_resgistration/>}/>
          <Route path='/user/:id' element={privateRoute(<Home/>)}/>
          <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
    </>
  );
}

export default App;
