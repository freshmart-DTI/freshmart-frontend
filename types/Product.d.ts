export interface ProductType {
  id: string;
  name: string;
  price: number;
  description: string;
  images: ProductImage[];
  category: string;
}

interface ProductImage {
  id: string;
  url: string;
}

interface ProductWithInventory extends ProductType {
  stock: number;
  storeId: string;
}

interface Category {
  id: string;
  name: string;
}
