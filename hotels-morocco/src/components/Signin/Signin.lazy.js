import React, { lazy, Suspense } from 'react';

const LazySignin = lazy(() => import('./Signin'));

const Signin = props => (
  <Suspense fallback={null}>
    <LazySignin {...props} />
  </Suspense>
);

export default Signin;
