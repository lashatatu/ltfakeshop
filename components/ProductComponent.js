const ProductComponent = ({ products }) => {
  return (
    <>
      <ul>
        <li className={'grid flex xl:grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:items-center text-center'}>
          {products.length === 0 ? (<div>loading...</div>) : (
            products.map(({ category, image, title, description, price, id,rating }) => (
              <div className={'container'}>
                <div id={id} className='card w-96 bg-base-200 shadow-xl'>
                  <p className={'text-sm breadcrumbs pl-6'}>{category}</p>
                  <figure className={'px-10 pt-10'}>
                    <img
                      className={'rounded-2xl hover:scale-110 hover:transition hover:ease-in-out duration-100'}
                      src={image} alt='' />
                  </figure>
                  <div className={'card-body items-center text-center'}>
                    <h2 className={'card-title'}>{title}</h2>
                    <p className={'text-clip overflow-hidden'}>{description}</p>
                    <div className='card-actions items-center gap-10'>
                      <h3 className='font-bold'>{price}</h3>
                      <button className='btn btn-primary'>Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </li>
      </ul>
    </>
  );
};

export default ProductComponent;