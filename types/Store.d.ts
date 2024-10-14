import { ProductType } from './Product';

interface Store {
  id: number;
  name: string;
  province: string;
  city: string;
  district: string;
  latitude: number;
  longitude: number;
  isMain: boolean;
  inventories: any[];
  orders: any[];
  storeAdmins: any[];
  createdAt: string;
}

interface StoreWithProducts extends Store {
  products: ProductType[];
}
