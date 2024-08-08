<template>
    <div>
      <h2>{{ isEdit ? 'Edit' : 'Add' }} Product</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" v-model="product.name" required>
        </div>
        <div class="mb-3">
          <label for="responsible" class="form-label">Responsible</label>
          <input type="text" class="form-control" id="responsible" v-model="product.responsible" required>
        </div>
        <div class="mb-3">
          <label for="category" class="form-label">Category</label>
          <input type="text" class="form-control" id="category" v-model="product.category" required>
        </div>
        <button type="submit" class="btn btn-primary">{{ isEdit ? 'Update' : 'Add' }}</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    props: {
      productToEdit: Object,
    },
    data() {
      return {
        product: this.productToEdit ? { ...this.productToEdit } : { name: '', responsible: '', category: '' },
      };
    },
    computed: {
      isEdit() {
        return !!this.productToEdit;
      },
    },
    methods: {
      ...mapActions(['addProduct', 'updateProduct']),
      async handleSubmit() {
        if (this.isEdit) {
          await this.updateProduct(this.product);
        } else {
          await this.addProduct(this.product);
        }
        this.$emit('success');
      },
    },
  };
  </script>