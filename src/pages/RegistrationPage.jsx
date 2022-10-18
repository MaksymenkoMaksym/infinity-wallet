import React from 'react';
import { RegisterForm } from "components/Forms/RegistrationForm";
import {ReactComponent as Logo} from '../assets/images/logo.svg';

export const RegistrationPage = () => {
    return (<section style={{padding: "20px", height: "100vh", width: "280px", marginRight: "auto", marginLeft: "auto"}}>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "60px"}}>
        <Logo width="48" height="48" style={{marginRight: "15px"}}/>
    <h1 style={{margin: "0"}}>Wallet</h1>
    </div>
    <RegisterForm/>
    </section>
)}