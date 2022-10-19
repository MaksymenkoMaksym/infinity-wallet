import React from 'react';
import {RegistrationForm} from '../components/Forms';
import svgIcon from "../assets/images/icons.svg"

export const RegistrationPage = () => {
    return (<section style={{padding: "20px", height: "100vh", width: "280px", marginRight: "auto", marginLeft: "auto"}}>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "60px"}}>
        <svg width="48" height="48" style={{marginRight: "15px"}}>
            <use href={svgIcon + `#icon-logo`}></use>
        </svg>
    <h1 style={{margin: "0"}}>Wallet</h1>
    </div>
    <RegistrationForm/>
    </section>
)}