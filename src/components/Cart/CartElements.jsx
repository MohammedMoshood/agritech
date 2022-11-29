import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

export const Overall = styled.div`
  display:flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Section = styled.section`
  padding: 40px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  min-height: 66.8vh;
  width: ${({check})=> check ? "70%" : "100%"} ;
  max-width: 1500px;
  background: #132350;
  transition: 0.3S all;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 40px 0;
  }
`;

export const Container = styled.div`
  width: 600px;
  background-color: white;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width:768px) {
    width: 90%;
    padding: 30px 10px;
  }
`;

export const TopDiv = styled.div`
   color: white ;
   font-family: "Inter";
   display: flex;
   justify-content: space-between;
   width: 600px;
   @media screen and (max-width:768px) {
    width: 90%;
  }
   
`
export const TotalAmount = styled.h1`
   font-weight: 200 ;
`
export const Header = styled.div`
  font-family: "Inter";
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;
export const CartItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-family: "Inter";
  justify-content: space-between;
`;

export const ImgDiv = styled.div`
  width: 80px;
  height: 80px;
 
`;
export const Name = styled.p``;
export const Amount = styled.p``;
export const Price = styled.p``;
export const ButtonDiv = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  width: 80px;
  text-align: center;
`;

export const MinusDiv = styled.div`
  width: 25px;
  height: 25px;
  color: white;
  border-radius: 50%;
  background-color: #346dd6;
  display: grid;
  cursor: pointer;
  place-items: center;
  font-size: 12px;
  transition: 0.2s all;
  &:hover {
    background-color: lightgreen;
  }
`;
export const AddDiv = styled.div`
  width: 25px;
  height: 25px;
  font-size: 12px;
  color: white;
  display: grid;
  transition: 0.2s all;
  place-items: center;
  cursor: pointer;
  border-radius: 50%;
  background-color: #346dd6;
  &:hover {
    background-color: lightgreen;
  }
`;

export const Delete = styled(FaTrash)`
  color: red;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    color: darkred;
    transform: rotateZ(360deg);
  }
`;


export const SectionB = styled.div`
  flex: 1;
  background-color: #224688;
  border-left:1px solid white ;
  border-top:1px solid white ;
  padding: 120px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom:1px solid white ;
`

export const TopDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ItemText = styled.p`
font-size: 18px;
text-transform: uppercase;
color: white;
font-family: "DM Sans";
  
`

export const BottomDiv = styled.div`
  display: flex;
  padding-top: 30px;
  border-top: 1px solid white;
  justify-content: space-between;
`

export const CostText = styled.p`
  font-size: 20px;
text-transform: uppercase;
color: white;
font-weight: 500;
font-family: "DM Sans";
`

export const Checkout = styled.button`
border: none;
padding: 20px;
background-color: #132350;
cursor: pointer;
font-size: 20px;
justify-self: flex-end;
color: white;
transition: 0.4s all;
&:hover{
  background-color: white;
  color: #132350;
}
`