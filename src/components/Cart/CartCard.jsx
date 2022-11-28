import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  AddDiv,
  Amount,
  BottomDiv,
  ButtonDiv,
  CartItem,
  Checkout,
  Container,
  CostText,
  Delete,
  Header,
  ImgDiv,
  ItemText,
  MinusDiv,
  Name,
  Price,
  Section,
  SectionB,
  TopDiv,
  TopDiv2,
  TotalAmount,
} from "./CartElements";

const CartCard = ({ cartItems, handleAdd, handleDelete, handleMinus }) => {
  var check = cartItems.length;
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  const totalAmount = cartItems.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  );

  const VAT = (7.5/100)*totalPrice
  return (
    <div style={{ display: "flex" }}>
      <Section check={check}>
        <TopDiv>
          <TotalAmount style={{}}>Your Container</TotalAmount>
          <TotalAmount>{`Items(${totalAmount})`}</TotalAmount>
        </TopDiv>

        {cartItems.length === 0 ? (
          <Container style={{ fontFamily: "Inter", textAlign: "center" }}>
            {" "}
            You have no items in your container
          </Container>
        ) : (
          <Container>
            <Header>
              <div>Product</div>
              <div>Name</div>
              <div>Amount</div>
              <div>Price</div>
              <div>-/+</div>
              <div>Delete</div>
            </Header>
            {cartItems.map((item) => {
              return (
                <CartItem key={item.id}>
                  <ImgDiv>{item.image}</ImgDiv>
                  <div style={{ textAlign: "left", width: "80px" }}>
                    <Name>{item.name}</Name>
                  </div>
                  <div style={{ textAlign: "left", width: "80px" }}>
                    <Amount>{item.quantity}</Amount>
                  </div>
                  <div style={{ textAlign: "left", width: "80px" }}>
                    <Price>{`N${item.price}/dz`}</Price>
                  </div>
                  <ButtonDiv>
                    <MinusDiv onClick={() => handleMinus(item)}>
                      <FaMinus />{" "}
                    </MinusDiv>
                    <AddDiv onClick={() => handleAdd(item)}>
                      <FaPlus />
                    </AddDiv>
                  </ButtonDiv>
                  <Delete onClick={() => handleDelete(item)} />
                </CartItem>
              );
            })}
          </Container>
        )}
      </Section>
      {cartItems.length !== 0 && (
        <SectionB>
          <TopDiv2>
            <ItemText>ITEM{` (${cartItems.length})`}</ItemText>
            <ItemText>N{totalPrice}</ItemText>
          </TopDiv2>
          <TopDiv2>
            <ItemText>VAT(7.5%)</ItemText>
            <ItemText>N{VAT}</ItemText>
          </TopDiv2>
          <BottomDiv>
            <CostText>TOTAL</CostText>
            <CostText>N{VAT + totalPrice}</CostText>
          </BottomDiv>
          <Checkout>Checkout</Checkout>
        </SectionB>
      )}
    </div>
  );
};

export default CartCard;
