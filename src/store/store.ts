import { createStore, StoreOptions } from 'vuex';
import { RootState } from '@/types/store/root-state.d';
import cardModule from '@/store/modules/card';
import productsModule from '@/store/modules/products';
import authenticationModule from '@/store/modules/authentication';


const store: StoreOptions<RootState> = createStore({
  modules: {
    card: cardModule,
    prods: productsModule,
    auth: authenticationModule,
  },
})

export default store;
