import React from "react";
import Header from "../../components/Header";
import PortfolioItem from "../../components/PortfolioItem";

const PortfolioItemPage: React.FC = () => {
  return (
    <div>
      <Header title="Майя Колесникова" />
      <PortfolioItem />
    </div>
  );
};

export default PortfolioItemPage;
