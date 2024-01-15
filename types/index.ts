export interface Product {
  _id: string;
  images: string[];
  tag: string;
  name: string;
  price: number;
  category: string;
  des: string;
}

export interface CartItem extends Product {
  amount: number;
}

export interface ProductSliceInit {
  products: Product[];
  totalPages: number;
  cart: CartItem[];
  total: number;
}

export interface SearchParams {
  page?: number | 1;
  search?: string;
  category?: string;
  sort?: string;
  name?: string;
}
