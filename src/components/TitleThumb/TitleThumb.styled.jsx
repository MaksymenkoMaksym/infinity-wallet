import styled from "styled-components";

export const Box = styled.div`
margin-right: auto;
margin-left: auto;
width: 533px;
display: flex;
justify-content: flex-start;
align-items: center;


@media (max-width: 1279px) {
margin-bottom: 50px;

}
@media (min-width: 1280px) {
width: 43%;
flex-direction: column;
justify-content: center;
}
`

export const PrimarySvg = styled.svg`
width: 260px;
height: 250px;

@media (max-width: 1279px) {
    margin-right: 40px;

}
@media (min-width: 1280px) {
    width: 452px;
    height: 412px;
    margin-bottom: 32px;
}
`

export const Title = styled.h1`
font-size: 30px;
font-weight: 400;
line-height: 1.5;
margin: 0;
`