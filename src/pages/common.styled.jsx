import styled from "styled-components";
import VioletSpot from "../assets/images/Ellipse-1.png";
import PinkSpot from "../assets/images/Ellipse-2.png";



export const Body = styled.div`
background-color: #ffffff;
@media (min-width: 768px) {
  padding-top: 60px;
  padding-bottom: 48px;
  background-color: #E5E5E5;
  overflow: hidden;
  background-image: url(${VioletSpot}), url(${PinkSpot});
  background-repeat: no-repeat, no-repeat;
  background-position:  -133.33px 655px, 396.41px -123px;
  @media (min-width: 1280px) {
    display: flex;
    padding: 0;
    height: 100vh;
    
  }

}`

export const Backdrop = styled.div`
height: 100%;
width: 57%;
padding-top: 52px;
padding-bottom: 52px;
display: flex;
justify-content: center;
align-items: center;
`




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
  @media (min-width: 1280px) {
    width: 533px;
  

  }
`

