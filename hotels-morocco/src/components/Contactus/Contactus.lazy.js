import React, { lazy, Suspense } from 'react';

const LazyContactus = lazy(() => import('./Contactus'));

const Contactus = props => (
  <Suspense fallback={null}>
    <LazyContactus {...props} />
  </Suspense>
);

export default Contactus;
