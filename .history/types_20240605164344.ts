// types.ts
export interface Product {
  id: string;
  name: string;
  description: string;
}

export interface ProductState {
  product: Product;
  loading: boolean;
  error: Error | null;
}

export interface IResponse<T> {
  data: T;
  meta: Object;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  products: Product[];
}

export interface CategoriesState {
  categories: Category[];
  loading: boolean;
  error: Error | null;
}
