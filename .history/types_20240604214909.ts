// types.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  // Add other product properties here
}

export interface ProductState {
  product: Product | null;
  loading: boolean;
  error: Error | null;
}
