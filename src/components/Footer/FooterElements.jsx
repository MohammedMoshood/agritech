import styled from "styled-components";

export const Foot = styled.section`
  width: "100%";
  max-width: 1500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient( 90deg,#dee9ed, #f1f6fa,  #f3f9f9,  #f3f9f9 );
`;
export const Container = styled.div`
  width: 85%;
  max-width: 1200px;
  border-top: 1px solid lightgrey;
  display: flex;
  padding: 20px 0;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.p`
  color: black;
  font-size: 13px;
  font-family: "Inter";
`;
