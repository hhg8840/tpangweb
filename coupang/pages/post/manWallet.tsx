import React from 'react';
import data from '@productsDetail/2022.3.17/2022.3.17_남성지갑.json';
import ContentLayout from 'src/component/ContentLayout';

type Props = {};

const manWallet = (props: Props) => {
  return (
    <>
      <ContentLayout data={data} />
    </>
  );
};

export default manWallet;
