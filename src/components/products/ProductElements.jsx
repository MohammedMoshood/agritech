import styled from "styled-components";
import {FaPlus} from "react-icons/fa"

export const Section = styled.section`
  width: "100%";
  max-width: 1500px;
  display: flex;
  padding: 20px 70px;
  background: #132350;
  gap: 40px;
  flex-direction: column;
  @media screen and (max-width: 768px) {
   padding: 20px 20px;
  }
`;

export const HDiv = styled.div`
display:flex;
align-items: center;

`;

export const SectionH = styled.h2`
  font-family: "DM Sans";
  font-size: 40px;
  color: white;
  @media screen and (max-width:768px) {
    font-size: 20px;
  }
`;

export const FruitsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
@media screen and (max-width:768px) {
    gap: 20px;
    justify-content: center;
  }
`;

export const FruitCard = styled.div`
  border-radius: 30px;
  width: 230px;
  height: 230px;
  background-color: white;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  padding: 20px;
  transition: 0.3s all;
  &:hover{
    transform: scale(0.95);
    box-shadow: #346dd6  2px 2px 50px ;

    .add{
        background-color: lightgreen;
    }
  }
`;

export const ImgDiv = styled.div`
width:170px;
height: 170px;
border-radius: 50% ;
`;

export const Img = styled.img`
border-radius: 50% ;
width: 100%;
`;
export const Name = styled.h5`
font-size: 14px;
font-family: "Inter";
margin-top: 10px;
`;

export const BottomCardDiv = styled.div`
  display: flex;
height: 40px;
width: 100%;
margin-top: 10px;
align-items: center;
justify-content: space-between;
`

export const Price = styled.p`
  color: #346dd6;
  font-family: "Inter";
  
  font-size: 14px;
`

export const AddDiv = styled.div`
  color: white;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#346dd6  ;
  border-radius: 50%;
`

export const Sign = styled(FaPlus)`

`
