import { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux';


function Logout(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(Logout()).then(()=>{
            navigate("/",{replace:true})
        })
    },[])

    return(
        <>
            <button >Log out</button>
        </>
    )
}

export default Logout;
