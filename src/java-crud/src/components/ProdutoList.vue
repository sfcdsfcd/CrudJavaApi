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
          <tr v-for="product in produtos" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.nome }}</td>
            <td>{{ product.responsavel }}</td>
            <td>{{ product.categoria }}</td>
            <td>
              <button class="btn btn-warning btn-sm" @click="$emit('edit', product)">Edit</button>
              <button class="btn btn-danger btn-sm" @click="deleteProduto(product.id)">Delete</button>
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
      ...mapGetters(['produtos']),
    },
    methods: {
      ...mapActions(['deleteProduto']),
    },
  };
  </script>