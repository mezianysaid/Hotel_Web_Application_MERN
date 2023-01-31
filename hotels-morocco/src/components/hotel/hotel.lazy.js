import React, { lazy, Suspense } from 'react';
import { Navigate } from "react-router-dom";
const LazyHotel = lazy(() => import('./hotel'));

const Hotel = () => {
  const GoDetails =() => {
    Navigate(['/details'])
  }
  let props={GoDetails}
  
  return(
<Suspense fallback={null}>
    <LazyHotel {...props} />
  </Suspense>
  )
}

export default Hotel;
