/* eslint-disable */
// import { Store } from 'vuex';

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare module '*.vue' {
//   import Vue from 'vue';
//
//   export default Vue;
// }
//
// declare module "vue/types/vue" {
//   interface Vue {
//     $store: Store<any>;
//   }
// }
