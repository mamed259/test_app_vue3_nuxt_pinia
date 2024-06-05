// types.ts
export interface Product {
  id: string;
  name: string;
  // description: string;
  // Add other product properties here
}

export interface ProductState {
  product: Product | null;
  loading: boolean;
  error: Error | null;
}

// types.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  // Add other product properties here
}

export interface Category {
  id: string;
  name: string;
  products: Product[];
  // Add other category properties here
}

export interface CategoriesState {
  categories: Category[];
  loading: boolean;
  error: Error | null;
}
