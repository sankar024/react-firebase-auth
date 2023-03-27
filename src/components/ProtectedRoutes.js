import React from 'react'
import { Navigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";



export const ProtectedRoutes = ({children}) => {
    const {user} = useUserAuth()
    console.log(user);
    if(!user){
       return  <Navigate to='/'></Navigate>
    }else{
    console.log("po");

    return children
    }
}
