import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledForm = styled.form`
margin-top: 60px;
width: 280px;
${props => props.theme.breakpoints.tab} {
    width: 410px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
` 
export const Label = styled.label`
margin-bottom: ${props => props.theme.space[4]}px;
color: ${props => props.theme.colors.grayIcon};
position: relative;
display: block;
${props => props.theme.breakpoints.tab} {
        width: 100%;
}
`
export const Placeholder = styled.span`
color: currentColor;
position: absolute;
top: -3px;
left: ${props => props.theme.space[5]}px;
font-size: ${props => props.theme.fontSizes.m};
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
width: 100%;
box-sizing: border-box;
height: 24px;
font-size: ${props => props.theme.fontSizes.m};
padding-bottom: 5px;
padding-left: ${props => props.theme.space[5]}px;
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
    color: ${props => props.theme.colors.black};
    transform: translateY(-20px);
    font-size: ${props => props.theme.fontSizes.xs};
}
${props => props.theme.breakpoints.tab} {
        width: 100%;
}
`
export const Link = styled(NavLink)`
    width: 100%;
    height: ${props => props.theme.space[5]}px;
    outline: none;
    text-decoration: none;
    padding:  ${props => props.theme.space[0]};
    background-color: ${props => props.theme.colors.background.white};
    color: ${props=>props.theme.colors.blue};
    border: ${props=>props.theme.borders.normal};
    border-radius: ${props => props.theme.radii.md};
    letter-spacing: 0.1rem;
    font-size: ${props => props.theme.fontSizes.m}px;
    line-height: ${props => props.theme.lineHeights.main};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: color 250ms linear, box-shadow 250ms linear, border-color 250ms linear;
    &:hover,
    &:focus{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        color: ${props=>props.theme.colors.green};
        border-color: ${props=>props.theme.colors.green};
    }
    ${props=> props.theme.breakpoints.tab} {
        width: 300px;
  }
`
export const Button = styled.button`
    width: 100%;
    height: ${props => props.theme.space[5]}px;
    padding: ${props => props.theme.space[0]};
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.green};
    border: ${props => props.theme.borders.green};
    border-radius: ${props => props.theme.radii.md};
    letter-spacing: 0.1rem;
    font-size: ${props => props.theme.fontSizes.m};
    line-height: ${props => props.theme.lineHeights.main};
    margin-bottom: ${props => props.theme.space[2]}px;
    transition: background-color 250ms linear, box-shadow 250ms linear, border-color 250ms linear;
    &:hover,
    &:focus{
        color: ${props => props.theme.colors.white};
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-color: ${props => props.theme.colors.blue};
        border-color: ${props => props.theme.colors.blue};
    }
    ${props => props.theme.breakpoints.tab} {
        width: 300px;
  }
`
export const ErrorBox = styled.div`
color: ${props => props.theme.colors.error};
position: absolute;
font-size: 14px;
margin-left: ${props => props.theme.space[1]}px;
`
export const ErrorSvg = styled.svg`
width: 16px;
height: 16px;
position: absolute;
fill: ${props => props.theme.colors.error};
top: -25px;
left: 250px;
${props => props.theme.breakpoints.tab} {
top: -25px;
left: 380px;
}
`