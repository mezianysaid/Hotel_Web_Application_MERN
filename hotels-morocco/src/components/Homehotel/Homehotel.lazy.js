import React, { lazy, Suspense } from 'react';

const LazyHomehotel = lazy(() => import('./Homehotel'));

const Homehotel = () => {
  // const products = [
  //   {
  //     id: 1,
  //     name: 'Basic Tee',
  //     href: '#',
  //     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: '$35',
  //     color: 'Black',
  //   },
  // ]
  const products =[ 
    {name:'said'},
    {name:'said'},
    {name:'said'},
    {name:'said'},
  ]
  let props={ products }
  return (
  <Suspense fallback={null}>
    <LazyHomehotel {...props} />
  </Suspense>
);
  }

export default Homehotel;
