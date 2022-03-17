import React from 'react';
import styled from 'styled-components';
import data from '@productsDetail/2022.3.17/2022.3.17_블루투스스피커.json';
import ContentLayout from 'src/component/ContentLayout';

type Props = {};

const blutoothSpeaker = (props: Props) => {
  return (
    <>
      <ContentLayout data={data} />
    </>
  );
};

export default blutoothSpeaker;
