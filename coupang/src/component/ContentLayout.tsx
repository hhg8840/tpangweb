import { IData } from '@customTypes/allTypes';
import { kakaoShare } from '@lib/kakaoShare';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import AppLayout from './AppLayout';
import { useRecoilState } from 'recoil';
import { searchTextAtom } from 'src/Atoms/atom';

const ContentLayout = ({ data }: { data: IData[] }) => {
  const today = new Date();
  const year = today.getFullYear(); // 년도
  const month = today.getMonth() + 1; // 월
  const [searchText, setSearchText] = useRecoilState(searchTextAtom);
  const [filteredData, setFilteredData] = useState<null | IData[]>(data);

  const url = 'https://gwang.xyz';

  return (
    <AppLayout>
      <Head>
        <title key={shortid.generate()}>{`${year}년${month}월 ${data[0].keyword} 추천순위 TOP10`}</title>
        <meta
          key={shortid.generate()}
          name="description"
          content={`${data[0].keyword} 추천순위 TOP10을 소개해드립니다.!!`}
        />
        <meta
          name="keyword"
          content="키보드추천, 노트북추천, 마우스추천, 액션캠추천, 모니터추천, 블루투스마우스 추천, 기계식키보드 추천, 목걸이추천, 남자지갑 추천,여자지갑추천, 통돌이 세탁기추천 "
        />
        <meta key={shortid.generate()} property="og:type" content="website" />
        <meta key={shortid.generate()} property="og:url" content={url} />
        <meta key={shortid.generate()} property="og:title" content={`${data[0].keyword} 추천순위 TOP10`} />
        <meta key={shortid.generate()} property="og:image" content={data[0].productImage} />
        <meta
          key={shortid.generate()}
          property="og:description"
          content={`${data[0].keyword} 추천순위 TOP10을 소개해드립니다.`}
        />
        <meta
          key={shortid.generate()}
          property="og:site_name"
          content="전자제품, 생황가전제품 등 필수아이템 추천순위 TOP10"
        />
        <meta key={shortid.generate()} property="og:locale" content="ko_KR" />
      </Head>
      <ContentLayoutWrapper>
        <Title>{`${year}년${month}월`} </Title>
        <Title>{data[0].keyword} 인기순위 TOP10</Title>
        <Intro>
          {`안녕하세요. Sim's SaleShop 매니져 심랭킹입니다😊`}
          <br />
          {`오늘은 ${year}년 ${month}월에 가장 많이 팔린 ${data[0].keyword} `}
          <br />
          인기순위 TOP10에 대해 알아보겠습니다.
          <br />
          <div>
            ※ 상세정보 및 후기 버튼을 눌러 상품의 자세한 정보 및 후기를 확인할 수 있습니다.
            <br />※ 우측 공유하기 버튼을 눌러 마음에 드는 상품을 카카오톡으로 공유해보세요.
          </div>
        </Intro>

        <ContainerWrapper>
          {filteredData?.map((item) => (
            <Container key={shortid.generate()} onClick={() => window.open(item.productUrl)}>
              <RankWrapper>
                <Rank>{item.rank}</Rank>
              </RankWrapper>
              <ProductTitle>{item.productName}</ProductTitle>
              <ImageWrapper>
                <ProductImg src={item.productImage} />
              </ImageWrapper>
              <Price>가격 : ₩{item.productPrice.toLocaleString()}</Price>

              <ButtonWrapper>
                <LinkBox>상세정보 및 후기</LinkBox>

                <ShareImg onClick={() => kakaoShare(item)} src="/images/share.png" alt="" />
              </ButtonWrapper>
            </Container>
          ))}
          <Intro>쿠팡에서 다른 상품도 한번 검색해보세요 😊</Intro>
          <IframeWrapper>
            <iframe
              src="https://coupa.ng/cchmez"
              width="100%"
              height="36"
              frameBorder="0"
              scrolling="no"
              referrerPolicy="unsafe-url"
            ></iframe>
          </IframeWrapper>
        </ContainerWrapper>
      </ContentLayoutWrapper>
    </AppLayout>
  );
};

export default ContentLayout;
const IframeWrapper = styled.div`
  width: 45%;
  @media screen and (max-width: 992px) {
    width: 90%;
  }
`;
const Intro = styled.p`
  text-align: center;
  color: white;
  font-size: 1.3rem;
  margin-top: 40px;
  div {
    font-size: 1rem;
    margin-top: 30px;
    color: #f1c74a;
  }
`;

const ContentLayoutWrapper = styled.div`
  margin-top: -80px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
`;

const ContainerWrapper = styled.div`
  max-width: 1200px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  min-width: 350px;
  border-radius: 15px;
  width: 40%;
  background-color: white;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: all 0.2s linear;
  :hover {
    transform: scale(1.05);
  }
`;

const ProductTitle = styled.div`
  margin-top: 2rem;
  width: 60%;
  text-align: center;
  font-weight: 700;
  font-size: 1.4rem;
`;

const ProductImg = styled.img`
  object-fit: contain;
  width: 60%;
`;

const ImageWrapper = styled.div`
  width: 100%;
  text-align: center;
`;
const Price = styled.div`
  text-align: center;
  width: 60%;
  font-weight: 600;
  font-size: 2rem;
`;

const Rank = styled.div`
  margin: auto 0;
`;

const Title = styled.div`
  padding: 30px 50px 0px 50px;
  font-size: 3rem;
  font-weight: 1000;
  color: white;
  text-align: center;
`;

const RankWrapper = styled.div`
  position: absolute;
  width: 6rem;
  height: 6rem;
  text-align: center;
  background-color: #f9c51d;
  color: white;
  border-radius: 1000px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 3rem;
  font-weight: 700;
  left: -2rem;
  top: -2rem;
`;

const LinkBox = styled.div`
  margin-top: 30px;
  padding: 1.25rem 1.575rem;
  background-color: #f9c51d;
  width: 40%;
  border-radius: 10px;
  margin-bottom: 30px;
  color: white;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 700;
  transition: all 0.2s linear;
  cursor: pointer;
  :hover {
    background-color: #ffd600;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const ShareImgWrapper = styled.div`
  background-color: #f9c51d;
  padding: 20px;
  border-radius: 5px;
`;

const ShareImg = styled.img`
  object-fit: contain;
  width: 4rem;
  height: 4rem;
  background-color: #f9c51d;
  padding: 1rem;
  margin-left: 20px;
  border-radius: 10px;
  :hover {
    background-color: #ffd600;
  }
  z-index: 500;
`;
