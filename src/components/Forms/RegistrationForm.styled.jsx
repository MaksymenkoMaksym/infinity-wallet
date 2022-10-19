import styled from "styled-components";
import { Field } from "formik";
 
export const Label = styled.label`
margin-bottom: 40px;
color: #E0E0E0;
position: relative;
display: block;

`

export const Placeholder = styled.span`
color: currentColor;
position: absolute;
top: -3px;
left: 50px;
font-size: 18px;
transition: color 250ms linear, transform 250ms linear, font-size 250ms linear;
`
export const IconSvg = styled.svg`
width: 24px;
height: 24px;
fill: currentColor;
position: absolute;
top: -7px;
left: 10px;
transition:  color 250ms linear;
`

export const Input = styled(Field)`
/* width: 100%; */
height: 20px;
font-size: 18px;

padding-left: 50px;
border: none;
border-bottom: 1px solid #E0E0E0;
outline-style: none;
transition: border-color 250ms linear;
&:focus, &:not(:placeholder-shown){
    border-bottom: 1px solid #000000;  
}
&:focus + ${IconSvg},
&:not(:placeholder-shown) + ${IconSvg} {
    color: #000000;
}

&:focus~ ${Placeholder},
&:not(:placeholder-shown)~ ${Placeholder} {
    color: #000000;
    transform: translateY(-20px);
    font-size: 12px;
}
`



export const Button = styled.button`
    width: 100%;
    height: 50px;
    margin-bottom: 40px;
    background-color: #ffffff;
    color: "4A56E2";
    border: 1px solid "4A56E2";
    border-radius: 20px;

`

export const ActiveButton = styled(Button)`
    color: "#ffffff";
    background-color: " 24CCA7";


`