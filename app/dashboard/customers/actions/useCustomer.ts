import { Customer } from '@/app/lib/definitions';
import $http from '@/app/utils/axios';

export default async function useCustomer() {
  let customers = <Customer[]>[];
  let customer = <Customer>{};
  let isLoading = false;

  async function fetchCustomers(): Promise<void> {
    const { data } = await $http.get('/customer');
    customers = data.data;
  }

  async function fetchCustomerById(id: string): Promise<void> {
    const { data } = await $http.get(`/v1/customers/${id}`);
    customer = data.data;
  }

  // 99099

  return {
    customers,
    customer,
    fetchCustomers,
    fetchCustomerById,
  };
}
