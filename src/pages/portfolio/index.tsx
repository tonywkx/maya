import React from "react";
import Header from "../../components/Header";
import Portfolio from "../../components/Portfolio";

const portfolioItems = [
  {
    id: 1,
    image: "/logo/ag-logo.jpg",
    description: "Image 1",
    title: "Студия свадеб",
    year: "2022",
  },
  {
    id: 2,
    image: "/logo/bereg-logo.png",
    description: "Image 2",
    title: "Бар Берег",
    year: "2019",
  },
  {
    id: 3,
    image: "/logo/dogger-logo.jpg",
    description: "Image 3",
    title: "HotDogger",
    year: "2019",
  },
  {
    id: 4,
    image: "/logo/jaws-logo.jpeg",
    description: "Image 4",
    title: "Бар Jawsspot",
    year: "2021",
  },
  {
    id: 5,
    image: "/logo/meb-logo.jpg",
    description: "Image 5",
    title: "Студия мебели",
    year: "2023",
  },
  {
    id: 6,
    image: "/logo/micro-logo.jpg",
    description: "Image 6",
    title: "Микрозелень",
    year: "2023",
  },
  {
    id: 7,
    image: "/logo/moose-logo.jpg",
    description: "Image 7",
    title: "Coffee Moose",
    year: "2019",
  },
  {
    id: 8,
    image: "/logo/nextpro-logo.jpg",
    description: "Image 8",
    title: "NextPro Dance",
    year: "2023",
  },
  {
    id: 9,
    image: "/logo/vinka-logo.jpg",
    description: "Image 9",
    title: "Дело не в Вине",
    year: "2019",
  },
];

const PortfolioPage: React.FC = () => {
  return (
    <div>
      <Header title="Майя Колесникова" />
      <Portfolio portfolioItems={portfolioItems} />
    </div>
  );
};

export default PortfolioPage;
