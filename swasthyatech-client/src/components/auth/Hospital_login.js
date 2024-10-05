import React,{useState} from "react";
import { handleError, handleSuccess } from "../utils";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function Hospital_login() {
    const [hospitalId,setHospitalID] = useState(null)
    const [hospitalPass,setHospitalPass ] = useState(null)

    const navigate = useNavigate();

    const userData = {
        email:hospitalId,//needs to change further the variable to userID instead of email
        password:hospitalPass,
    }
    function formHandler(event){
        event.preventDefault();
        if(!hospitalId || !hospitalPass){
            handleError("Please fill email and password to login")
        }
        fetch('/auth/hospitalogin',{
            method:"POST",
            headers:{
                'content-type':'application/json;charset=utf-8'
            },
            body:JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message)
            if(data.success){
                handleSuccess(data.message)
                localStorage.setItem('token',data.jwtToken);
                localStorage.setItem('loggedInUser',data.email);
                localStorage.setItem('userID',data.id);
                setTimeout(()=>{
                    navigate(`/user/${data.id}`)
                },1000)
            }
        })
        .catch(err=>console.log(err))
        console.log("clicked")
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="" method="POST" className="space-y-6" onSubmit={formHandler}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Hospital ID
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type=""

                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={e=> setHospitalID(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={e=> setHospitalPass(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                    <ToastContainer/>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            REGISTER 
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Hospital_login;