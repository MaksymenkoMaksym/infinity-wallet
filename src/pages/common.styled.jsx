import styled from "styled-components";


export const Body = styled.div`
background-color: #ffffff;
@media (min-width: 768px) {
  background-color: #E5E5E5;
}`


export const Section = styled.section`
box-sizing: border-box;
padding: 20px;

width: 280px;
margin-right: auto; 
margin-left: auto;
background-color: #ffffff;
@media (max-width: 767px) {
  height: 100vh;
}
    @media (min-width: 768px) {
    width: 533px;
padding-top: 40px;
padding-bottom: 60px;
    border-radius: 20px;
    min-width: auto;
    min-height: auto;
    overflow: hidden;
    
  }
`


