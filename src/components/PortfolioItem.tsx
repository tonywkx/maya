import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { PortfolioItemData } from "../pages/portfolio/[id]";

const Wrapper = styled.div`
  display: flex;
  margin: 3rem 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 16px;
  background-color: rgb(173, 173, 166);
  padding: 10px;
  border-radius: 12px;
  color: rgb(48, 60, 58);
`;

const Subtitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
  margin-top: 20px;
  width: 48%;
  background-color: rgb(137, 191, 182);
  padding: 10px;
  border-radius: 12px;
  color: rgb(48, 60, 58);
`;

const ImageContainer = styled.div`
  width: 75%;
  margin-top: 24px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const PortfolioItem: React.FC<{ selectedItem: PortfolioItemData }> = ({
  selectedItem,
}) => {
  /* const router = useRouter();
  const { id } = router.query; */

  return (
    <Wrapper>
      <Title>{selectedItem?.title}</Title>

      {selectedItem.subtitle && <Subtitle>{selectedItem.subtitle}</Subtitle>}

      <Text>{selectedItem.text1}</Text>
      <Image src={selectedItem.image1} alt={selectedItem?.title} />
      {selectedItem.text2 && <Text>{selectedItem.text2}</Text>}
      {selectedItem.image2 && (
        <Image src={selectedItem.image2} alt={selectedItem?.title} />
      )}
      {selectedItem.text3 && <Text>{selectedItem.text3}</Text>}

      {selectedItem.image3 && (
        <Image src={selectedItem.image3} alt={selectedItem?.title} />
      )}
      {selectedItem.image4 && (
        <Image src={selectedItem.image4} alt={selectedItem?.title} />
      )}
    </Wrapper>
  );
};

export default PortfolioItem;
