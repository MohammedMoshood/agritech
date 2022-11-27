import React from "react";
import {
  FruitCard,
  FruitsContainer,
  HDiv,
  Img,
  ImgDiv,
  Name,
  Section,
  SectionH,
} from "./ProductElements";
import pearImg from "../../images/pear.jpg"

const Fruit = () => {
  return (
    <Section>
      <HDiv>
        <SectionH>Fruits</SectionH>
      </HDiv>
      <FruitsContainer>
        <FruitCard>
          <ImgDiv>
            <Img src={pearImg} ></Img>
          </ImgDiv>
          <Name></Name>
        </FruitCard>
        <FruitCard>
          <ImgDiv>
            <Img src={pearImg}  ></Img>
          </ImgDiv>
          <Name></Name>
        </FruitCard>{" "}
        <FruitCard>
          <ImgDiv>
            <Img src={pearImg}  ></Img>
          </ImgDiv>
          <Name></Name>
        </FruitCard>
        <FruitCard>
          <ImgDiv>
            <Img src={pearImg}  ></Img>
          </ImgDiv>
          <Name></Name>
        </FruitCard>
      </FruitsContainer>
    </Section>
  );
};

export default Fruit;
