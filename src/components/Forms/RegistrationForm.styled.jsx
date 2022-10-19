import styled from "styled-components";
import { Field } from "formik";
import {ReactComponent as LetterSvg} from "../../assets/images/letter.svg";
import {ReactComponent as LockSvg} from "../../assets/images/lock.svg";
import {ReactComponent as AvatarSvg} from "../../assets/images/avatar.svg"
 
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


export const Input = styled(Field)`
width: 100%;
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
&:focus+.svg,
&:not(:placeholder-shown)+.svg {
    color: #000000;
}

&:focus~.placeholder,
&:not(:placeholder-shown)~.placeholder {
    color: #000000;
    transform: translateY(-20px);
    font-size: 12px;
}
`

export const Letter = styled(LetterSvg)`
width: 24px;
height: 24px;
fill: currentColor;
position: absolute;
top: -7px;
left: 10px;
transition:  color 250ms linear;
`

export const Lock = styled(LockSvg)`
width: 24px;
height: 24px;
fill: currentColor;
position: absolute;
top: -7px;
left: 10px;
transition:  color 250ms linear;
`
export const Avatar = styled(AvatarSvg)`
width: 24px;
height: 24px;
fill: currentColor;
position: absolute;
top: -7px;
left: 10px;
transition:  color 250ms linear;`

export const Button = styled.button`
`