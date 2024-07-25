import { Metadata } from 'next';
import useCustomer from './actions/useCustomer';

export const metadata: Metadata = {
  title: 'Customer',
};

export default async function Page() {
  const { customers, customer } = await useCustomer();

  console.log(customers);

  return <p>Customer Page</p>;
}
