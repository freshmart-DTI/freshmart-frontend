import { StaticImageData } from "next/image";

export interface ProductItems {
  id: number;
  image: StaticImageData;
  name: string;
  price: number;
  category: string;
  description: string;
  discountType: number;
}
