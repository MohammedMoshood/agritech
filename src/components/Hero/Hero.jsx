import React from "react";
import { HeroSection, HeroH, Container, HeroImg, HeroLeft, HeroRight, HeroP, ShopDiv, ShopText, ShopIcon } from "./HeroElements";
import Img1 from "../../images/HeroImg1.svg";
const Hero = () => {
  return (
    <HeroSection>
      <Container>
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
          <HeroImg width={"100%"} src={Img1} />
        </HeroRight>
      </Container>
    </HeroSection>
  );
};

export default Hero;
