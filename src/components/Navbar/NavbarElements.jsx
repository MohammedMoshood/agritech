import styled from "styled-components";
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";

export const Nav = styled.section`
  width: "100%";
  max-width: 1500px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Navcontainer = styled.nav`
  width: 85%;
  max-width: 1200px;
  display: flex;
  border-bottom: 1px solid #e1eafa;
  padding: 10px 0;
  align-items: center;
  justify-content: space-between;
  
`;
export const Logo = styled.img`
  height: 60px;
`;


export const Logotext  = styled.h3`
  font-family: "Inter";
    display: flex;
    font-size: 20px;
    align-items: center;
`

export const LinkDiv = styled.div`
  gap: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
export const ItemDiv = styled.a`
  border-radius: 8px;
  padding: 5px 10px;
  height: 20px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.4s all;
  &:hover {
    background-color: #f5f5f5;

    a {
      transition: 0.1s;
      color:#346dd6 ;
      font-size: 12px;
    }
  }
`;
export const LinkItem = styled.a`
  font-family: "Inter";
  transition: 0.4s all;

  font-size: 14px;
`;

export const CartDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #346dd6;
  cursor: pointer;
  gap: 10px;
  padding:8px 15px;
  border-radius: 8px;
  &:hover {
    transition: 0.4s all;
    background-color: #346dd6;
    color: white;

    svg{
    transform: rotateZ(20deg);
    }
    p{
        color: white;
    }
  }
`;

export const CartIcon = styled(FaShoppingCart)`
  transition: 0.2s all;
  
`;

export const CartText = styled.p`
  font-size: 14px;
  color: black;
  font-family: "Inter";
`;
