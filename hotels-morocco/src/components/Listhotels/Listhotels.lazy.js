import React, { lazy, Suspense } from 'react';

const LazyListhotels = lazy(() => import('./Listhotels'));

const Listhotels = props => (
  <Suspense fallback={null}>
    <LazyListhotels {...props} />
  </Suspense>
);
  
export default Listhotels;
