import styled from 'styled-components';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { indexStateAtom } from 'src/Atoms/atom';
import SearchInput from './SearchInput';

interface Props {
  children: React.ReactNode;
  keywords?: string[];
}

const TestLayout: React.FunctionComponent<Props> = ({ children, keywords }) => {
  const items: { value: string }[] = [];
  keywords?.map((el) => items.push({ value: el }));
  const indexState = useRecoilValue(indexStateAtom);

  return (
    <Layout>
      <Header>
        <Link href="/">
          <LogoWrapper>
            <LogoImg src="/images/Logo.png" alt="" />
          </LogoWrapper>
        </Link>
        {indexState ? (
          <SearchInput items={items} />
        ) : (
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
        )}
      </Header>
      {children}
      <Footer>Copyright © 2022 All Rights Reserved by Eungwang</Footer>
    </Layout>
  );
};

export default TestLayout;

const LogoWrapper = styled.div`
  width: 40%;
  min-width: 250px;
`;

const LogoImg = styled.img`
  width: 100%;
  cursor: pointer;
`;

const Layout = styled.div`
  background-color: #3e7e9c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Header = styled.div`
  max-width: 960px;
  width: 100%;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = styled.div`
  margin-top: 50px;
  padding: 50px 0;
  font-size: 1rem;
  color: white;
`;

const IframeWrapper = styled.div`
  width: 50%;
  @media screen and (max-width: 992px) {
    width: 90%;
  }
`;
