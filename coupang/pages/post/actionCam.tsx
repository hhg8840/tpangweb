import React from 'react';
import data from '@productsDetail/2022.3.17/2022.3.17_액션캠.json';
import ContentLayout from 'src/component/ContentLayout';

type Props = {};

const actionCam = (props: Props) => {
  return (
    <>
      <ContentLayout data={data} />
    </>
  );
};

export default actionCam;
