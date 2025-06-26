<<<<<<< HEAD
import React from 'react';
import { SignupForm } from '../_components/signup-form';

const RegisterPage = ({ params: {role} }) => {
    return (
        <div className='w-full flex-col h-screen flex items-center justify-center'>
            <div className='container'>
                <SignupForm role={role} />                
            </div>
            
        </div>
    );
=======
"use server";
import React from "react";
import { SignupForm } from "../_components/signup-form";

const RegisterPage = ({ params: { role } }) => {
  return (
    <div className="w-full flex-col h-screen flex items-center justify-center">
      <div className="container">
        <SignupForm role={role} />
      </div>
    </div>
  );
>>>>>>> main
};

export default RegisterPage;