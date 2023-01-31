import React, { lazy, Suspense ,useState} from 'react';
import dayjs from 'dayjs';
const LazyDetails = lazy(() => import('./Details'));

const Details = () => {
  const [value, setValue] = React.useState(dayjs('2023-01-01T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const guests = [
    {
      value: 1,
      label: 1,
    },
    {
      value: 2,
      label: 2,
    },
    {
      value: 3,
      label: 3,
    },
    {
      value: 4,
      label: 4,
    },
    {
      value: 5,
      label: 5,
    },
    {
      value: 6,
      label: 6,
    },
    {
      value: 7,
      label: 7,
    },
    {
      value: 8,
      label: 8,
    },
  ];
  let props={handleChange,value,setValue, guests}
  return (
  <Suspense fallback={null}>
    <LazyDetails {...props} />
  </Suspense>
)
}

export default Details;
