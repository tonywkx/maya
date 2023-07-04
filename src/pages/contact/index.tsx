import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const ContactImage = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  margin-right: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  object-fit: cover;
`;

const ContactIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 16px;
`;

const ContactText = styled.p`
  font-size: 16px;
`;

const ContactLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #888;
  }
`;

const ContactPage: React.FC = () => {
  return (
    <>
      <Header title="Майя Колесникова" />
      <Wrapper>
        <Title>Контакты</Title>
        <ContactList>
          <ContactItem>
            <ContactImage src="/me.jpg" alt="Личное фото" />
            <ContactText>Колесникова Майя Валерьевна</ContactText>
          </ContactItem>
          <ContactItem style={{ marginLeft: "5rem" }}>
            <ContactIcon src="/email-icon.png" alt="Иконка почты" />
            <ContactLink href="mailto:example@example.com">
              mayamalch96@yandex.ru
            </ContactLink>
          </ContactItem>
          <ContactItem style={{ marginLeft: "5rem" }}>
            <ContactIcon src="/phone-icon.png" alt="Иконка телефона" />
            <ContactLink href="tel:+79962179152"> +7 996 217 91 52</ContactLink>
          </ContactItem>
          <ContactItem style={{ marginLeft: "5rem" }}>
            <ContactIcon src="/tg-icon.png" alt="Иконка тг" />
            <ContactLink href="https://t.me/Maayshi">@Maayshi</ContactLink>
          </ContactItem>
        </ContactList>
      </Wrapper>
    </>
  );
};

export default ContactPage;
