import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Grid = styled.div`
  margin: 3rem 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const GridItem = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:hover ${Overlay} {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-position: center;
`;

const Title = styled.h3`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Year = styled.span`
  color: #fff;
  font-size: 14px;
`;

interface PortfolioItem {
  id: string;
  image: string;
  description: string;
  title: string;
  year: string;
}

interface PortfolioProps {
  portfolioItems: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolioItems }) => {
  return (
    <Grid>
      {portfolioItems.map((item) => (
        <Link key={item.id} href={`/portfolio/${item.id}`}>
          <GridItem>
            <Image src={item.image} alt={item.description} />
            <Overlay>
              <Title>{item.title}</Title>
              <Year>{item.year}</Year>
            </Overlay>
          </GridItem>
        </Link>
      ))}
    </Grid>
  );
};

export default Portfolio;
