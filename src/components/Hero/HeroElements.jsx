import { FaCartPlus } from "react-icons/fa";
import styled from "styled-components"



export const HeroSection = styled.section`
  width: "100%";
  max-width: 1500px;
  display: flex;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
`;

export const HeroH = styled.h2`
font-family: "DM Sans";
font-size: 70px;
  color: #132350;
  @media screen and (max-width: 768px) {
   font-size: 30px;
  }
`
export const HeroP = styled.p`
    font-family: "Inter";
    line-height: 1.8;
    font-size: 16px;
 color: grey;
 margin-top: 10px;
`

export const Container = styled.div`
width: 100%;
height: 79.2vh;
  display: flex;
  align-items: center;
  padding: 0 70px;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    padding: 0 20px;
    height: 85vh;
  }
`

export const HeroImg = styled.img`
    
`

export const HeroRight = styled.div`
width: 50%;
`
export const HeroLeft = styled.div`
gap: 20px;
`

export const ShopDiv = styled.a`
    display:flex;
    color: white;
    background-color: #346dd6;
    width: 120px;
    align-items: center;
    padding: 15px 10px;
    margin-top: 20px;
    border-radius: 5px;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.4s all;
    &:hover{
        background-color: #122a57;
        
}
`
export const ShopText = styled.p`
    font-family: "Inter";
    font-size: 14px;
    
    
`
export const ShopIcon = styled(FaCartPlus)`
    
`