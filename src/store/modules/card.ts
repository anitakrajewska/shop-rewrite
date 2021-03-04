import { RootState } from '@/types/store/root-state.d';
import { CardState, CardItem } from '@/types/store/card-state.d';
import { Product } from '@/types/store/products-state.d';
import { ActionContext, Module } from 'vuex';

const module: Module<CardState, RootState> = {
  namespaced: true,
  state: {
      items: [],
      total: 0,
      qty: 0,
  },
  getters: {
    products: (state: CardState) => state.items,
    totalSum: (state: CardState) => state.total.toFixed(2),
    quantity: (state: CardState) => state.qty,
  },
  mutations: {
    addProductToCart: (state: CardState, payload: CardItem): void => {
      const productData = payload;
      const productInCartIndex = state.items.findIndex(
        (ci) => ci.id === productData.id
      );

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          id: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.total += productData.price;
    },
    removeProductFromCart: (state: CardState, payload: CardItem): void => {
      const prodId = payload.id;
      const productInCartIndex = state.items.findIndex(
        (cartItem) => cartItem.id === prodId
      );
      const prodData = state.items[productInCartIndex];
      state.items.splice(productInCartIndex, 1);
      state.qty -= prodData.qty;
      state.total -= prodData.price * prodData.qty;
    },
  },
  actions: {
    addToCard: (ctx: ActionContext<CardState, RootState>, payload: CardItem): void => {
      const prodId = payload.id;
      const products = ctx.rootGetters['prods/products'];
      const product = products.find((prod: Product) => prod.id === prodId);
      ctx.commit('addProductToCart', product)
    },
    removeFromCard: (ctx: ActionContext<CardState, RootState>, payload: CardItem): void => {
      ctx.commit('removeProductFromCart', payload)
    }
  }
}

export default module;
