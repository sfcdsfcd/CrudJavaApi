<template>
    <div>
      <h2>{{ isEdit ? 'Edit' : 'Add' }} Produto</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="nome" class="form-label">Nome</label>
          <input type="text" class="form-control" id="nome" v-model="product.nome" required>
        </div>
        <div class="mb-3">
          <label for="responsavel" class="form-label">Responsável</label>
          <input type="text" class="form-control" id="responsavel" v-model="product.responsavel" required>
        </div>
        <div class="mb-3">
          <label for="categoria" class="form-label">Categoria</label>
          <input type="text" class="form-control" id="categoria" v-model="product.categoria" required>
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
        product: this.productToEdit ? { ...this.productToEdit } : { nome: '', responsavel: '', categoria: '' },
      };
    },
    computed: {
      isEdit() {
        return !!this.productToEdit;
      },
    },
    methods: {
      ...mapActions(['addProduto', 'updateProduto']),
      async handleSubmit() {
        if (this.isEdit) {
          await this.updateProduto(this.product);
        } else {
          await this.addProduto(this.product);
        }
        this.$emit('success');
      },
    },
  };
  </script>