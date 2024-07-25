import { Metadata } from 'next';
import useCustomer from './actions/useCustomer';

export const metadata: Metadata = {
  title: 'Customer',
};

export default async function Page() {
  const { customers, customer, fetchCustomers } = await useCustomer();

  await fetchCustomers();
  console.log(customers);
  

  return (
    <>
      <p>Asd {customers}</p>
    </>
  );
}
