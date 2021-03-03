export interface ProductsState {
  products: Product[],
}

export interface Product {
  id: string,
  title: string,
  image: string,
  price: number,
}
