import { Sale } from "lib/db/sales";
import { notFound } from "next/navigation"

async function getData(id) {
  const sale = await Sale.getSaleFromId(id);
  if (!sale) {
    notFound();
  }

  return sale;
}

export default async function Home({ params }) {
  const sale = await getData(params.id);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Buy our products!</p>
      <p>name: {sale.name} </p>
      <p>address: {sale.address} </p>
      <p>email: {sale.email} </p>
      <p>amount paid: {sale.amount_paid} </p>
      <p>product: {sale.product} </p>
      <p>product_count: {sale.product_count} </p>
      <p>tracking_number: {sale.tracking_number} </p>

    </main>
  );
}
