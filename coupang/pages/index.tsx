import type { NextPage } from 'next';
import Head from 'next/head';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { searchTextAtom, mainKeywordAtom } from 'src/Atoms/atom';
import React, { useEffect, useState } from 'react';
import AppLayout from 'src/component/AppLayout';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import data from '@productsDetail/Products.json';
import Link from 'next/link';
import shortid from 'shortid';
import { filteredItemAtom } from 'src/Atoms/atom';
import { IData } from '@customTypes/allTypes';
import { indexStateAtom } from 'src/Atoms/atom';

const Home: NextPage = () => {
  const initialDataSet = Object.values(data);
  const objectKey = Object.keys(data);

  const tempDataSet = initialDataSet.map((data, idx) =>
    data.map((el) => {
      return { ...el, nextLink: objectKey[idx] };
    }),
  );
  const dataSet = tempDataSet.map((data) => data[0]);
  const keywords = dataSet.map((data) => {
    return `${data.keyword} 추천 순위 보러가기`;
  });
  const [filteredItems, setFilteredItems] = useRecoilState(filteredItemAtom);
  const [filteredData, setFilteredData] = useState<any[] | IData[]>([]);
  const setIndexState = useSetRecoilState(indexStateAtom);
  useEffect(() => {
    const tempData = dataSet
      .map((data) => data)
      .filter((el) => `${el.keyword} 추천 순위 보러가기`.includes(filteredItems));
    setFilteredData(() => {
      return [...tempData];
    });
  }, [filteredItems]);

  useEffect(() => {
    setIndexState(true);
    return () => {
      setFilteredData([]);
      setFilteredItems('');
      setIndexState(false);
    };
  }, []);

  return (
    <React.StrictMode>
      <Head>
        <title>EungwangShop - 생활가전제품 추천순위 TOP10</title>
        <meta name="description" content="2022 가전제품, 생활용품 인기 추천 순위를 알려드립니다." />
        <meta name="keyword" content="키보드추천, 노트북추천, 마우스추천, " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout keywords={keywords}>
        <StyledRow gutter={[30, 30]}>
          {(filteredData.length ? filteredData : dataSet).map((data) => (
            <StyledCol key={shortid.generate()} xs={24} lg={12}>
              <Link href={`post/${data.nextLink}`}>
                <Container>
                  <StyledImg src={data.productImage} alt="" />
                  <Content>{`${data.keyword} 추천 순위 보러가기`} </Content>
                </Container>
              </Link>
            </StyledCol>
          ))}
        </StyledRow>
      </AppLayout>
    </React.StrictMode>
  );
};

export default Home;

const StyledRow = styled(Row)`
  margin-top: 20px;
  width: 100%;
  max-width: 960px;
`;

const StyledCol = styled(Col)``;

const Container = styled.div`
  width: 100%;
  background-color: white;
  height: 400px;
  border-radius: 10px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 80%;
  object-fit: contain;
`;

const Content = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 800;
  padding: 1.875rem;
  background-color: #f9c51d;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  :hover {
    background-color: #ffd600;
  }
`;
