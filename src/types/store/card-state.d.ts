export interface CardState {
  items: CardItem[],
  total: number,
  qty: number,
  [key: number]: any,
}

export interface CardItem {
  id: string,
  title: string,
  image: string,
  price: number,
  qty: number,
}
