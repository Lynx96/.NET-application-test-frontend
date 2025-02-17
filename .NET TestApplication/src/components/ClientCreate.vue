
<template>
  <div>
    <h1>Client Create</h1>
    <form @submit.prevent="submitForm">
      <label>
        <span>Nome</span>
        <input v-model="client.name" type="text" required>

      </label>
      <label>
        <span>Email</span>
        <input v-model="client.email" type="email" required>
      </label>
      <label>
        <span>Telefone</span>
        <input v-model="client.phoneNumber" type="text" required>
      </label>

      <div class="button">
        <button type="submit">Salvar</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">

import clientService from './../services/ClientService'

export default {

  data() {
    return {
      client: {
        name: '',
        email: '',
        phoneNumber: ''
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await clientService.createClient(this.client);
        console.log("aaaaaaaaaaaaa", response)
        this.$router.push('/');

      } catch (error) {
        console.error('Erro ao criar cliente:', error);
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

label {
  display: flex;
  flex-direction: column;
}

button {
  padding: 0.2rem 0.5rem;
}

.button {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;

}



</style>
