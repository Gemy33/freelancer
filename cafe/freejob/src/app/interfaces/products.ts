

export interface Products {
  id: number;
  name: string;
  totalPrice: number;
  priceAfterSale: number;
  photoUrl: string;
  avgRating: number;
  colors: string[];
}


export interface IproductInfo {
  id: number;
  name: string;
  description: string;
  numOfPhotos: number;
  normalMinDate: number;
  normalMaxDate: number;
  urgentMinDate: number;
  urgentMaxDate: number;
  normalPrice: number;
  urgentPrice: number;
  text: boolean;
  date: boolean;
  user: User;
  enter: boolean;
  totalPrice: number;
  categoryName: string;
  colors: string[];
  sizes: any[];
  photos: string[];
  priceAfterSale: number;
  avgRating: number;
}

interface User {
  id: string;
  filePath: null;
  userName: string;
}