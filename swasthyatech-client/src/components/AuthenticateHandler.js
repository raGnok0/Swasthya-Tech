import { useNavigate,useLocation } from "react-router-dom";
import React,{ useEffect} from "react";

function AuthenticateHandler({setisAuthenticate}){
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
      if(localStorage.getItem('token')){
        setisAuthenticate(true);
        if(location.pathname === '/'|| location.pathname === '/hospital_login' || location.pathname === '/hospital_registration'){
          navigate(`/user/${localStorage.getItem('userID')}`,{replace:false})
        }
      }
    },[location,navigate,setisAuthenticate])


    return null;
  }

export default AuthenticateHandler;