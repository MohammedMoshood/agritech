import React from "react";
import {
  AddDiv,
  BottomCardDiv,
  FruitCard,
  FruitsContainer,
  HDiv,
  Img,
  ImgDiv,
  Name,
  Price,
  Section,
  SectionH,
  Sign,
} from "./ProductElements";
import { fruitdata } from "./productdata";

const Fruit = ({handleAdd}) => {
  return (
    <Section>
      <HDiv>
        <SectionH>Fruits</SectionH>
        <div
          style={{
            marginLeft: "10px",
            width: "10px",
            height: "10px",
            backgroundColor: "lightgreen",
            borderRadius: "50%",
          }}
        ></div>
      </HDiv>
      <FruitsContainer>
        {fruitdata.map((item) => {
          return (
            <FruitCard key={item.id} onClick={ () => handleAdd(item)} >
              <ImgDiv>
                  {item.image}
              </ImgDiv>
              <Name>{item.name}</Name>
              <BottomCardDiv>
                <div>
                  <Price>{`N ${item.price} /doz`}</Price>
                </div>

                <AddDiv  className="add">
                  <Sign  />
                </AddDiv>
              </BottomCardDiv>
            </FruitCard>
          );
        })}
      </FruitsContainer>
    </Section>
  );
};

export default Fruit;
