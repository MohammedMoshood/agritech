import React from "react";
import {
  LinkDiv,
  Logo,
  Nav,
  Navcontainer,
  LinkItem,
  ItemDiv,
  CartDiv,
  CartIcon,
  CartText,
  Logotext,
} from "./NavbarElements";
import CuabLogo from "../../images/logo.png";
const Navbar = () => {
  return (
    <Nav>
      <Navcontainer>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" , cursor:"pointer" }}>
          <a href="/"  style={{ color:"black" , display: "flex", gap: "10px", alignItems: "center" , textDecoration:"none" }} >
            <Logo src={CuabLogo} alt="logo" />
            <Logotext>
              CUAB <h3 style={{ color: "#346dd6", fontSize: "20px" }}>FARMS</h3>{" "}
            </Logotext>
          </a>
        </div>

        <LinkDiv>
          <ItemDiv>
            <LinkItem>About</LinkItem>
          </ItemDiv>
          <ItemDiv href="/products">
            {" "}
            <LinkItem>Products</LinkItem>
          </ItemDiv>
          <ItemDiv>
            {" "}
            <LinkItem>Services</LinkItem>
          </ItemDiv>
        </LinkDiv>

        <CartDiv>
          <CartIcon />
          <CartText>Cart</CartText>
        </CartDiv>
      </Navcontainer>
    </Nav>
  );
};

export default Navbar;
