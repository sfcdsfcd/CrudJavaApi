<template>
    <div>
      <h2>Product List</h2>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Responsible</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.responsible }}</td>
            <td>{{ product.category }}</td>
            <td>
              <button class="btn btn-warning btn-sm" @click="$emit('edit', product)">Edit</button>
              <button class="btn btn-danger btn-sm" @click="deleteProduct(product.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['products']),
    },
    methods: {
      ...mapActions(['deleteProduct']),
    },
  };
  </script>