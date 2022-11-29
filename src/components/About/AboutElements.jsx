import styled from "styled-components";

export const Section = styled.div`
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  padding: 20px 70px;
  background: #132350;
  gap: 25px;
  height: 72.9vh;
  align-items: center;
`;

export const TextDiv = styled.p`
  font-family: "DM Sans";
  color: white;
  text-align: center;
`;

export const ImageDiv = styled.div`
  width: 50%;
  justify-content: space-between;
  display: flex;
`;

export const QualityDiv = styled.div`
  width: 80%;
  display: flex;
  background-color: white;
  border-radius: 20px;
  padding: 40px;
  align-items: center;
  gap: 20%;
`;

export const ImgCont = styled.div`
  width: 25%;
  height: 180px;
  color: #346dd6;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
font-size: 80px;
gap: 30px;

`;
export const Img = styled.img`
  width: 100%;
`;
export const TopLine = styled.h6`
color: black;
font-size: 16px;
font-weight: 600;
text-transform: uppercase;
text-align: center;
font-family: "Inter";
`;
export const QualityText = styled.p`
color: grey;
font-size: 12px;
text-align: center;
margin-top: -20px;
font-family: "Inter";
`;

export const ImgDiv = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`