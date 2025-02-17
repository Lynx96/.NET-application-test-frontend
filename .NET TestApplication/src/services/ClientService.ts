import axios, { type AxiosResponse } from 'axios';

interface Client {
  id: number
  name: string
  email: string
  phoneNumber: string
}

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Base URL for your API
  timeout: 5000,   // Request timeout
  headers: { 'Content-Type': 'application/json' },
});

export default {

    async getClients(): Promise<Client[]> {
      const response: AxiosResponse<Client[]> = await axiosInstance.get<Client[]>('/Clients'); // GET para listar todos os clientes
      return response.data
    },
    async createClient(clientData: Client): Promise<Client> {
      const response: AxiosResponse<Client> = await axiosInstance.post<Client>('/Clients', clientData);
      return response.data // POST para criar um cliente
    },
    async updateClient(id: number, clientData: Client): Promise<void> {
      await axiosInstance.put<void>(`/clients/${id}`, clientData); // PUT para atualizar um cliente
    },
    async deleteClient(id: number): Promise<void> {
      await axiosInstance.delete<void>(`/clients/${id}`); // DELETE para remover um cliente
    },

  };
