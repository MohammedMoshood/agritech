import React from "react";
import { HeroSection, HeroH, Container,  HeroLeft, HeroRight, HeroP, ShopDiv, ShopText, ShopIcon } from "./HeroElements";
import fruitbg from "../../images/fruitbg.jpg";
const Hero = () => {
  return (
    <HeroSection  >
      <Container style={{backgroundImage:` url(${fruitbg})` , backgroundSize:"100% 100%"}} >
        <HeroLeft>
          <HeroH>
            Best Crops <br /> Money Can Buy
          </HeroH>
          <HeroP>
             Cuab Farms is the best place to get <br/> your neat and affordable freshly produced crops 
          </HeroP>
          <ShopDiv>
            <ShopText>Shop Now</ShopText>
            <ShopIcon></ShopIcon>
          </ShopDiv>
        </HeroLeft>
        <HeroRight>
        </HeroRight>
      </Container>
    </HeroSection>
  );
};

export default Hero;
