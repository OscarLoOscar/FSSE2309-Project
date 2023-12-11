export interface ProductData {
  products?: {
    pid: number,
    name: string,
    price: number,
    stock: number
  }[];
}