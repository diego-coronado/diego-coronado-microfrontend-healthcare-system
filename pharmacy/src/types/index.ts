export interface Medicine {
  id: string;
  name: string;
  category: string;
  stock: number;
  unit: string;
  price: number;
  manufacturer: string;
  expiryDate: string;
  reorderLevel: number;
}
