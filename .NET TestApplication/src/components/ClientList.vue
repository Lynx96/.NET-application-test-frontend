<template>
  <div>
    <h1>Client List</h1>
    <ul>
      <li v-for="client in clients" :key="client.id">
        <p><strong>ID:</strong> {{ client.id }}</p>
        <p><strong>Name:</strong> {{ client.name }}</p>
        <p><strong>Email:</strong> {{ client.email }}</p>
        <p><strong>Phone:</strong> {{ client.phoneNumber }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">

import clientService from './../services/ClientService'

interface Client {
  id: number
  name: string
  email: string
  phoneNumber: string
}

export default {

  data() {
    return {
      clients: [] as Client[],
    };
  },
  mounted() {
    this.fetchClients();
  },
  methods: {
    async fetchClients() {
      try {
        const response = await clientService.getClients();
        console.log("aaaaaaaaaaaaa", response)
        this.clients = response;

      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {

  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}

p {
  margin: 0;
  padding: 5px 0;
}
</style>
