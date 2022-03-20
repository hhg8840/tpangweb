import React from 'react';
import ContentLayout from 'src/component/ContentLayout';
import data from '@productsDetail/2022.3.17/test.json';
import { useRouter } from 'next/router';
import { IData } from '@customTypes/allTypes';

type Props = {};

const Post = () => {
  const router = useRouter();
  const keywordArr = Object.keys(data);
  let id: string = '';
  if (typeof router.query.id === 'string') id = router.query.id;

  let dataId: typeof id = '';
  if (id && keywordArr.includes(id)) {
    dataId = id;
  }
  const validData: IData[] = (data as { [key: string]: any })[dataId];

  return <>{validData ? <ContentLayout data={validData} /> : <>잘못된경로입니다.</>}</>;
};
export default Post;
