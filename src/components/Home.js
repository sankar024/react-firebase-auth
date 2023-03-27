import React from 'react'
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router";



export const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

    return (
        <>
            <div className='p-4 box mt-3 text-center'>Hello {user && user.email}</div>
            <div className='d-grid gap-2'>
                <Button onClick={handleLogout} variant='primary'>Logout</Button>
            </div>
        </>
    )
}
