import React from 'react';
import ContentLayout from 'src/component/ContentLayout';
import data from '@productsDetail/Products.json';
import { useRouter } from 'next/router';
import { IData } from '@customTypes/allTypes';
import { GetStaticPaths, GetStaticProps } from 'next';

type Props = {};
const keywordArr = Object.keys(data);
const Post = () => {
  const router = useRouter();
  let id: string = '';
  if (typeof router.query.id === 'string') id = router.query.id;

  let dataId: typeof id = '';
  if (id && keywordArr.includes(id)) {
    dataId = id;
  }
  const validData: IData[] = (data as { [key: string]: any })[dataId];

  return <>{validData ? <ContentLayout data={validData} /> : <>잘못된경로입니다.</>}</>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Get all posts via API, file, etc.
  // const posts = [{ id: 'kiss' }, { id: 'notebook' }, { id: '3' }, { id: '4' }, { id: '5' }]; // Example
  const posts = keywordArr.map((keyword) => ({
    id: keyword,
  }));

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const postId = context.params?.id || '';
  // Get post detail via API, file, etc.
  const post = { id: postId, content: `I'm the post with id ${postId}!` }; // Example
  return { props: { post } };
};

export default Post;
