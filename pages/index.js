import ProductComponent from '../components/ProductComponent';

export async function getServerSideProps () {
  const res = await fetch('https://fakestoreapi.com/products/');
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}

export default function Home ({products}) {
  return (
    <>
      <div className={'hero'}>lasha</div>
      <ProductComponent products={products}/>
    </>
  );
}
