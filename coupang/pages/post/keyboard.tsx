import React from 'react';
import data from '@productsDetail/2022.3.17/2022.3.17_게이밍키보드.json';
import ContentLayout from 'src/component/ContentLayout';

type Props = {};

const keyboard = (props: Props) => {
  return (
    <>
      <ContentLayout data={data} />
    </>
  );
};

export default keyboard;
