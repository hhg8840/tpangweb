import React from 'react';
import styled from 'styled-components';
import AppLayout from './AppLayout';

interface IData {
  productId: number;
  productName: string;
  productPrice: number;
  productImage: string;
  productUrl: string;
  keyword?: string;
  rank: number;
  isRocket: boolean;
  isFreeShipping: boolean;
  nextlink?: string;
}
interface test {
  a: string;
}

const ContentLayout = ({ data }: { data: IData[] }) => {
  return (
    <AppLayout>
      <ContentLayoutWrapper>
        <Title>{data[0].keyword} 인기순위 TOP10</Title>
        <ContainerWrapper>
          {data.map((item) => (
            <Container onClick={() => window.open(item.productUrl)}>
              <RankWrapper>
                <Rank>{item.rank}</Rank>
              </RankWrapper>
              <ProductTitle>{item.productName}</ProductTitle>
              <ImageWrapper>
                <ProductImg src={item.productImage} />
              </ImageWrapper>
              <Price>가격 : ₩{item.productPrice.toLocaleString()}</Price>
              <LinkBox>상세정보 및 후기</LinkBox>
            </Container>
          ))}
        </ContainerWrapper>
      </ContentLayoutWrapper>
    </AppLayout>
  );
};

export default ContentLayout;

const ContentLayoutWrapper = styled.div`
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

const LinkBox = styled.div`
  margin-top: 30px;
  padding: 1.875rem 1.875rem;
  background-color: #f9c51d;
  width: 60%;
  border-radius: 10px;
  margin-bottom: 30px;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.2s linear;
  cursor: pointer;
  :hover {
    background-color: #ffd600;
  }
`;

const RankWrapper = styled.div`
  position: absolute;
  width: 7rem;
  height: 7rem;
  text-align: center;
  background-color: #f9c51d;
  color: white;
  border-radius: 1000px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 4rem;
  font-weight: 700;
  left: -3rem;
  top: -3rem;
`;

const Rank = styled.div`
  margin: auto 0;
`;

const Title = styled.div`
  padding: 80px 50px;
  font-size: 3rem;
  font-weight: 1000;
  color: white;
  text-align: center;
`;
