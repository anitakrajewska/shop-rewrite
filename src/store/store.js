import { createStore } from 'vuex';
import cardModule from '@/store/modules/card.js';
import productsModule from '@/store/modules/products.js';
import authenticationModule from '@/store/modules/authentication.js';

const store = createStore({
  modules: {
    card: cardModule,
    prods: productsModule,
    auth: authenticationModule,
  },
})

export default store;
