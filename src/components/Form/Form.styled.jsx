import styled from "styled-components";

export const StyledForm = styled.form`
margin-top: 60px;
@media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
}
` 
 
export const Label = styled.label`
margin-bottom: 40px;
color: #E0E0E0;
position: relative;
display: block;
@media (min-width: 768px) {
    width: 75%;
 
  }

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
top: -3px;
left: 10px;
transition:  color 250ms linear;
`

export const Input = styled.input`
box-sizing: border-box;
height: 24px;
font-size: 18px;
padding-bottom: 5px;
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

@media (min-width: 768px) {
    width: 100%;
    }
`



export const Button = styled.button`
    width: 100%;
    height: 50px;
   
    padding: 0;
    background-color: #ffffff;
    color: #4A56E2;
    border: 1px solid #4A56E2;
    border-radius: 20px;
    letter-spacing: 0.1rem;
    font-size: 18px;
    line-height: 1.5;
    transition: color 250ms linear, box-shadow 250ms linear, border-color 250ms linear;
    &:hover,
    &:focus{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        color: #24CCA7;
        border-color: #24CCA7;
    }

    @media (min-width: 768px) {
        width: 300px;
  }
`

export const ActiveButton = styled(Button)`
    color: #ffffff;
    background-color: #24CCA7;
    border: 1px solid #24CCA7;
    margin-bottom: 40px;
    transition: background-color 250ms linear, box-shadow 250ms linear, border-color 250ms linear;
    &:hover,
    &:focus{
        color: #ffffff;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-color: #4A56E2;
        border-color: #4A56E2;
    }
`

export const ErrorBox = styled.div`
color: red;
position: absolute;
font-size: 14px;
margin-left: 10px;
`

export const ErrorSvg = styled.svg`
width: 16px;
height: 16px;
fill: red;
position: absolute;
top: -25px;
left: 330px;
`