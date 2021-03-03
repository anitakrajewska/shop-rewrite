<template>
  <section>
    <ul>
      <product-item
        v-for="prod in productsList"
        :key="prod.id"
        :id="prod.id"
        :title="prod.title"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
      ></product-item>
    </ul>
  </section>
</template>

<script lang='ts'>
import { defineComponent, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import ProductItem from '../components/products/ProductItem.vue';

export default defineComponent({
  components: {
    ProductItem,
  },
  setup: () => {
    const store = useStore();

    const productsList = computed(() => store.getters['prods/products']);

    onMounted(() => {
      store.dispatch('prods/bindProducts');
    })

    return {
      productsList
    }
  }
});
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 40rem;
  }
</style>
