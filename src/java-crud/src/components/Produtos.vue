<template>
    <div class="container">
      <product-form v-if="showForm" :productToEdit="productToEdit" @success="handleSuccess"></product-form>
      <button class="btn btn-primary my-3" @click="showForm = !showForm">{{ showForm ? 'Cancel' : 'Add Product' }}</button>
      <product-list @edit="handleEdit"></product-list>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  import ProductForm from '../components/ProdutoForm.vue';
  import ProductList from '../components/ProdutoList.vue';
  
  export default {
    components: {
      ProductForm,
      ProductList,
    },
    data() {
      return {
        showForm: false,
        productToEdit: null,
      };
    },
    methods: {
      ...mapActions(['fetchProducts']),
      handleSuccess() {
        this.showForm = false;
        this.productToEdit = null;
        this.fetchProducts();
      },
      handleEdit(product) {
        this.productToEdit = product;
        this.showForm = true;
      },
    },
    created() {
      this.fetchProducts();
    },
  };
  </script>