import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow-x: hidden;
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 25px;
  margin-bottom: 20px;
  color: rgb(100, 99, 99);
`;

const OperatorButton = styled.button`
  position: relative;
  background-color: #f5f5f5;
  border: none;
  border-radius: 5px;
  color: #333;
  font-size: 16px;
  width: 160px;
  height: 50px;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    background-color: #86cd86;
  }
`;

const ContactImage = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  margin-right: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  object-fit: cover;
`;

const MainScreen: React.FC = () => {
  return (
    <Container>
      <ContactImage src="/me.jpg" alt="Личное фото" />
      <Title>Майя Колесникова</Title>
      <Subtitle>Привет, я графический дизайнер, а это мое портфолио</Subtitle>
      <Link href={`/portfolio`}>
        <OperatorButton>Смотреть</OperatorButton>
      </Link>
    </Container>
  );
};

export default MainScreen;
