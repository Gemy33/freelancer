export interface categories {
  id: number;
  name: string;
  description: string;
  products: IProduct[];
}

export interface IProduct {
  id: number;
  name: string;
  totalPrice: number;
  priceAfterSale: number;
  photoUrl: string;
  avgRating: number;
  colors: string[];
}