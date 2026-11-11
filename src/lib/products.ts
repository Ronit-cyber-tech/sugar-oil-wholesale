export type Product = {
  id: string;
  name: string;
  category: "Sugar" | "Oil";
  description: string;
  packaging: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
};

const placeholderImage = "/images/sugar-oil-placeholder.svg";

export const products: Product[] = [
  {
    id: "sugar-1",
    name: "Sugar-L",
    category: "Sugar",
    description: "",
    packaging: "",
    image: "/images/SugarL.jpeg",
  },
  {
    id: "sugar-2",
    name: "Sugar-M",
    category: "Sugar",
    description: "",
    packaging: "",
    image: "/images/SugarM.jpeg",
  },
  {
    id: "sugar-3",
    name: "Sugar Super S",
    category: "Sugar",
    description: "",
    packaging: "",
    image: "/images/SugarSuperS.jpeg",
  },
  {
    id: "oil-1",
    name: "Champion Soyabean 15Kg",
    category: "Oil",
    description: "",
    packaging: "",
    image: "/images/Champion Soyabean 15Kg.jpeg",
  },
  {
    id: "oil-2",
    name: "Champion Sunflower 15Kg",
    category: "Oil",
    description: "",
    packaging: "",
    image: "/images/Champion Sunflower 15Kg.jpeg",
  },
  {
    id: "oil-3",
    name: "Champion Soyabean 15L",
    category: "Oil",
    description: "",
    packaging: "",
    image: "/images/ChampionSoyabean15L.jpeg",
  },
  {
    id: "oil-4",
    name: "Champion Sunflower 15L",
    category: "Oil",
    description: "",
    packaging: "",
    image: "/images/ChampionSunflower15L.jpeg",
  },
  {
    id: "oil-5",
    name: "Gemeni Soyabean 15Kg",
    category: "Oil",
    description: "",
    packaging: "",
    image: "/images/GeminiSoyabean15Kg.jpeg",
  },
  {
    id: "oil-6",
    name: "Gemini Sunflower 15L",
    category: "Oil",
    description: "",
    packaging: "",
    image: "/images/GeminiSunflower15L.jpeg",
  },
  {
    id: "oil-7",
    name: "Champion Soyabean 1L Pouch",
    category: "Oil",
    description: "",
    packaging: "",
    image: "/images/ChampionSoyabean1L.jpeg",
  },
  {
    id: "oil-8",
    name: "Champion Soyabean Half L Pouch",
    category: "Oil",
    description: "",
    packaging: "",
    image: "/images/ChampionSoyabeanHalfL.jpeg",
  },
  {
    id: "oil-9",
    name: "Champion Sunflower 1L Pouch",
    category: "Oil",
    description: "",
    packaging: "",
    image: "/images/Champion Sunflower 1L.jpeg",
  },
  {
    id: "oil-10",
    name: "Champion Soyabean 5L Can",
    category: "Oil",
    description: "",
    packaging: "",
    image: "/images/ChampionSoyabeancan5L.jpeg",

  },
  {
    id: "oil-11",
    name: "Radhuni Palm Oil 15Kg",
    category: "Oil",
    description: "",
    packaging: "",
    image: "/images/Radhuni Premium Soyabean Oil Tin.png",
  },
];