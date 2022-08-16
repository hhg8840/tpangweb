import type { NextPage } from 'next';
import Head from 'next/head';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { searchTextAtom, mainKeywordAtom } from 'src/Atoms/atom';
import React, { useEffect, useState } from 'react';
import AppLayout from 'src/component/AppLayout';
import { Col, Row } from 'antd';
import styled, { css } from 'styled-components';
import data from '@productsDetail/Products.json';
import Link from 'next/link';
import shortid from 'shortid';
import { filteredItemAtom } from 'src/Atoms/atom';
import { IData } from '@customTypes/allTypes';
import { indexStateAtom } from 'src/Atoms/atom';
import { shuffle } from 'lodash';
import { Audio, Watch } from 'react-loader-spinner';

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
  const [loadingState, setloadingState] = useState(true);
  const setIndexState = useSetRecoilState(indexStateAtom);
  useEffect(() => {
    try {
      const tempData = dataSet
        .map((data) => data)
        .filter((el) => `${el.keyword} 추천 순위 보러가기`.includes(filteredItems));
      setFilteredData(() => {
        return shuffle([...tempData]);
      });
      setloadingState(false);
    } catch (e) {
      console.log(e);
    }
  }, [filteredItems]);

  useEffect(() => {
    setIndexState(true);
    return () => {
      setFilteredItems('');
      setIndexState(false);
    };
  }, []);

  return (
    <React.StrictMode>
      <Head>
        <title>추천인기 TOP 10</title>
        <meta name="description" content="2022 가전제품, 생활필수품 등의 인기 추천 순위를 알려드립니다." />
        <meta
          name="keyword"
          content="키보드추천, 노트북추천, 마우스추천,모니터추천, 웹캠추천, 체중계추천, 귀걸이추천 "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout keywords={keywords}>
        <StyledRow gutter={[30, 30]} loading={loadingState}>
          {filteredData.length >= 1 && !loadingState ? (
            filteredData.map((data) => (
              <StyledCol key={shortid.generate()} xs={24} lg={12}>
                <Link href={`post/${data.nextLink}`}>
                  <Container>
                    <StyledImg src={data.productImage} alt="" />
                    <Content>{`${data.keyword} 추천 순위 보러가기`} </Content>
                  </Container>
                </Link>
              </StyledCol>
            ))
          ) : (
            <Watch height="300" width="300" color="orange" ariaLabel="loading" />
          )}
        </StyledRow>
      </AppLayout>
    </React.StrictMode>
  );
};

export default Home;

interface loading {
  loading: boolean;
}

const StyledRow = styled(Row)<loading>`
  margin-top: 30px;
  width: 100%;
  max-width: 960px;
  justify-content: center !important;
  ${(props) =>
    props.loading &&
    css`
      padding-top: 100px;
    `}
`;

const StyledCol = styled(Col)``;

const Container = styled.div`
  width: 100%;
  background-color: white;
  height: 400px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s linear;
  :hover {
    transform: scale(1.05);
  }
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
  background-color: #FF1E00;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  /*:hover {
    background-color: #ffd600;
  } */
`;
