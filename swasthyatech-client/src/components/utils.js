import { toast } from "react-toastify";

export const handleError = (msg)=>{
    toast.error(msg,{
        position:'top-center'
    })
}

export const handleSuccess = (msg)=>{
    toast.success(msg,{
        position:'top-center'
    })
}