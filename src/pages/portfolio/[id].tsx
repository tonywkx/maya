import React from "react";
import Header from "../../components/Header";
import PortfolioItem from "../../components/PortfolioItem";

export interface PortfolioItemData {
  id: number;
  title: string;
  subtitle?: string;
  text1: string;
  text2?: string;
  text3?: string;
  image1: string;
  image2?: string;
  image3?: string;
  image4?: string;
}

const itemData: PortfolioItemData[] = [
  {
    id: 1,
    title: "AG Studio",
    subtitle: "Частная студия по организации свадеб",
    text1: `Первоочередная задача - создание логотипа для студии свадеб. Главное требование - минимализм и использование инициалов директора студии.`,
    text2: `А также я разработала макет визитки для представителя студии. Главное требование: цветы в графике, минимализм и использование логотипа.`,
    text3: `При сотрудничестве с данной компанией мне также посчастливилось разработать макет свадебного приглашения. Титульный лист прилагается.`,
    image1: "/ag/img1.jpg",
    image2: "/ag/img2.jpg",
    image3: "/ag/img3.jpg",
  },
  {
    id: 2,
    title: "Берег",
    subtitle: "Бар крафта и фастфуда",
    text1: `В данной работе необходимо было создать макет для бара "Берег".
    Главная задача - нестандартный формат подарочного сертификата, японская стилистика и шрифт, напоминающий рукописный.`,
    text2: `Также для данного заведения стояла задача создать акционный макет для тейбл тента.
    Особенность задачи заключалась в срочности.`,
    image1: "/bereg/img1.jpg",
    image2: "/bereg/img2.jpg",
  },
  {
    id: 3,
    title: "HotDogger",
    subtitle: "Федеральная сеть ресторанов быстрого питания",
    text1: `Создание меню для настольного формата.
    Требование: соблюдение фирменного стиля, согласно брендбуку сети, компоновка текста и объектов, с визуальным пониманием вида блюда.`,
    image1: "/hotdogger/img1.jpg",
  },
  {
    id: 4,
    title: "Jawsspot",
    subtitle: "Бар крафтового пива",
    text1: `Заказчик поставил задачу разработать фирменный логотип для футболок униформы сотрудников бара Jawsspot. 
    Основной критерий: минимализм и немного драйва.`,
    text2: `Также помимо утвержденного есть пара вариантов с использованием арта.`,
    image1: "/jawsspot/img1.jpg",
    image2: "/jawsspot/img2.jpg",
    image3: "/jawsspot/img3.jpg",
  },
  {
    id: 5,
    title: "Unitemeb",
    text1: `Моей главной задачей в данном проекте было создание экспресс логотипа для мебельной компании.
    Главное требование: минимализм, полностью отражающий основной продукт, в данном случае - шкафы, полки и комплектующие.`,
    text2: `Дополнительно нужно было разработать рекламный макет в журнал, который относится к новой коллекции.
    Пожелание: соблюдение цветового сочетания с изображением в развороте и основного цвета логотипа.
     Приложением к задаче было написание рекламного текста к макету.`,
    image1: "/studiamebeli/img1.jpg",
    image2: "/studiamebeli/img2.jpg",
  },
  {
    id: 6,
    title: "Microhealth",
    subtitle: "Частная компания по вырашиванию микрозелени",
    text1: `Передо мной стояла задача создать логотип для компании по производству микрозелени. 
    Главное требование: максимально минимально, с отражением основного продукта в производстве.`,
    text2: `Второй задачей являлась разработка макета для упаковок продукции компании Microhealth.
    Главное требование: ярко и красочно, и использованием свежих цветов и отображением главного продукта.`,
    image1: "/microzelen/img1.jpg",
    image2: "/microzelen/img2.jpg",
    image3: "/microzelen/img3.jpg",
  },
  {
    id: 7,
    title: "CoffeeMoose",
    subtitle: "Международная сеть кофеен",
    text1: `Создание макетов рекламных плакатов о сезонных предложениях во всероссийской сети кофеен.
    Фото использования прилагаются ниже.`,
    text2: `Разработка дизайна стаканчика. Главная задача - минимализм с использованием фирменного шрифта и логотипа.`,
    text3: `Стояла задача максимально точно, но с минимумом лишнего отобразить карту для благотворительного фонда, созданого сетью.
    Ключевое требование - соблюдение стилистики и фирменных цветов, согласно брендбуку.`,
    image1: "/coffeemoose/img1.jpg",
    image2: "/coffeemoose/img2.jpg",
    image3: "/coffeemoose/img3.jpg",
    image4: "/coffeemoose/img4.jpg",
  },
  {
    id: 8,
    title: "Next Pro",
    text1: `Создание логотипа и фирменного стиля для танцевального лагеря Next pro dance champ`,
    text2: `Дополнительно прикрепляю один из первых вариантов логотипа.
    Заказчиком рассматривались разные стили исполнения.`,
    image1: "/nextpro/img1.jpg",
    image2: "/nextpro/img2.jpg",
    image3: "/nextpro/img3.jpg",
    image4: "/nextpro/img4.jpg",
  },
  {
    id: 9,
    title: "Дело не в Вине",
    subtitle: `Всероссийская сеть винотек и винных ресторанов`,
    text1: `В данной работе стояла задача создать титульный лист меню.
    Главным требованием в задаче являлось соблюдение фирменного стиля и лаконичность.`,
    text2: `Вторая задача - подарочные сертификаты. 
    Важно было соблюсти спектр фирменных цветов, фирменный шрифт и общую стилистику винного бара.`,
    image1: "/vinka/img1.jpg",
    image2: "/vinka/img2.jpg",
    image3: "/vinka/img3.jpg",
  },
];

export async function getStaticProps(context) {
  const id = context.params.id;
  return {
    props: { id }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: itemData.map((item) => ({
      params: {
        id: String(item.id),
      },
    })),
    fallback: false, // See the "fallback" section below
  };
}

const PortfolioItemPage: React.FC<{ id: number }> = ({ id }) => {
  const selectedItem = itemData.find((item) => item.id === Number(id));

  return (
    <div>
      <Header />
      <PortfolioItem selectedItem={selectedItem!} />
    </div>
  );
};

export default PortfolioItemPage;
