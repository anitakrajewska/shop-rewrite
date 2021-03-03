import { RootState } from '@/types/store/root-state.d';
import { Product, ProductsState } from '@/types/store/products-state.d';
import { ActionContext, Module } from 'vuex';

const module: Module<ProductsState, RootState> = {
  namespaced: true,
  state: {
      products: [],
      // products: [
      //   {
      //     id: 'p1',
      //     image:
      //       'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
      //     title: 'Book Collection',
      //     description:
      //       'A collection of must-read books. All-time classics included!',
      //     price: 99.99,
      //   },
      //   {
      //     id: 'p2',
      //     image:
      //       'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg',
      //     title: 'Mountain Tent',
      //     description: 'A tent for the ambitious outdoor tourist.',
      //     price: 129.99,
      //   },
      //   {
      //     id: 'p3',
      //     image:
      //       'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
      //     title: 'Food Box',
      //     description:
      //       'May be partially expired when it arrives but at least it is cheap!',
      //     price: 6.99,
      //   },
      // ],
  },
  getters: {
    products: (state: ProductsState) => state.products,
  },
  mutations: {
    setProducts: (state: ProductsState, payload: Product[]) => {
      state.products = payload;
    }
  },
  actions: {
    bindProducts: async (ctx: ActionContext<ProductsState, RootState>):Promise<void> => {
      // GET request using fetch with error handling
      await fetch("http://localhost:3002/products")
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }
          ctx.commit('setProducts', data.products);
        })
        .catch(error => {
          //this.errorMessage = error;
          console.error("There was an error!", error);
        });
    },
  }
}
export default module;
