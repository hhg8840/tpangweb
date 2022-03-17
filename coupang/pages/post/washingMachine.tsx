import React from 'react';
import data from '@productsDetail/2022.3.17/2022.3.17_통돌이세탁기.json';
import ContentLayout from 'src/component/ContentLayout';

type Props = {};

const washingMachine = (props: Props) => {
  return (
    <>
      <ContentLayout data={data} />
    </>
  );
};

export default washingMachine;
