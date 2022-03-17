import type { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';
import { useEffect } from 'react';
import { generateHmac } from '@lib/hmacGenerator';
import React from 'react';
import AppLayout from 'src/component/AppLayout';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import keyboard from '@productsDetail/2022.3.17/2022.3.17_게이밍키보드.json';
import manWallet from '@productsDetail/2022.3.17/2022.3.17_남성지갑.json';
import notebook from '@productsDetail/2022.3.17/2022.3.17_노트북.json';
import blutoothMouth from '@productsDetail/2022.3.17/2022.3.17_블루투스마우스.json';
import blutoothSpeaker from '@productsDetail/2022.3.17/2022.3.17_블루투스스피커.json';
import necklace from '@productsDetail/2022.3.17/2022.3.17_목걸이.json';
import actionCam from '@productsDetail/2022.3.17/2022.3.17_액션캠.json';
import monitor from '@productsDetail/2022.3.17/2022.3.17_모니터.json';
import Link from 'next/link';
import shortid from 'shortid';

const Home: NextPage = () => {
  const initialDataSet = [keyboard, manWallet, notebook, blutoothMouth, blutoothSpeaker, necklace, actionCam, monitor];
  const temp = [
    'keyboard',
    'manWallet',
    'notebook',
    'blutoothMouth',
    'blutoothSpeaker',
    'necklace',
    'actionCam',
    'monitor',
  ];
  const dataSet = initialDataSet.map((data, idx) =>
    data.map((el) => {
      return { ...el, nextLink: temp[idx] };
    }),
  );

  return (
    <React.StrictMode>
      <Head>
        <title>Simcoding</title>
        <meta name="description" content="2022 가전제품, 생활용품 인기 추천 순위를 알려드립니다." />
        <meta name="keyword" content="키보드추천, 노트북추천, 마우스추천, " />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
      </Head>
      <AppLayout>
        <StyledRow gutter={[30, 30]}>
          {dataSet.map((data) => (
            <StyledCol key={shortid.generate()} xs={24} lg={12}>
              <Link href={`post/${data[0].nextLink}`}>
                <Container>
                  <StyledImg src={data[0].productImage} alt="" />
                  <Content>{`${data[0].keyword} 추천 순위 보러가기`} </Content>
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
