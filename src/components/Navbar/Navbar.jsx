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
import { Link } from "react-router-dom";
const Navbar = ({ cartItems }) => {
  return (
    <Nav>
      <Navcontainer>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Link
            to="/"
            style={{
              color: "black",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Logo src={CuabLogo} alt="logo" />
            <Logotext>
              CUAB <h3 style={{ color: "#346dd6", fontSize: "20px" }}>FARMS</h3>
            </Logotext>
          </Link>
        </div>

        <LinkDiv>
          <ItemDiv to="/">
            <LinkItem to="/">Home</LinkItem>
          </ItemDiv>
          <ItemDiv to="/products">
            {" "}
            <LinkItem to="/products">Products</LinkItem>
          </ItemDiv>
          <ItemDiv to="/about">
            {" "}
            <LinkItem to="/about">About</LinkItem>
          </ItemDiv>
        </LinkDiv>

        <CartDiv to="/cart">
          <CartIcon />
          <CartText>Cart ({`${cartItems.length}`})</CartText>
        </CartDiv>
      </Navcontainer>
    </Nav>
  );
};

export default Navbar;
