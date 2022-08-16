import styled from 'styled-components';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { indexStateAtom } from 'src/Atoms/atom';
import SearchInput from './SearchInput';
import { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  keywords?: string[];
}

const TestLayout: React.FunctionComponent<Props> = ({ children, keywords }) => {
  const items: { value: string }[] = [];
  keywords?.map((el) => items.push({ value: el }));
  const indexState = useRecoilValue(indexStateAtom);
  const [scrollToTopBtnState, setScrollToTopBtnState] = useState(false);
  const scrollBtnRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const scrollFunc = () => {
      if (window.scrollY >= 100) {
        setScrollToTopBtnState(true);
      } else {
        setScrollToTopBtnState(false);
      }
    };
    window.addEventListener('scroll', scrollFunc);
  }, []);

  const scrollToTOP = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Layout>
      <Header>
        <Link href="/">
          <LogoWrapper>
            <LogoImg src="/images/Logo.png" alt="" />
          </LogoWrapper>
        </Link>
        {indexState && <SearchInput items={items} />}
      </Header>
      {children}
      <Footer>Copyright © 2022 All Rights Reserved by Eungwang</Footer>
      {scrollToTopBtnState && (
        <ScrollToTopBtn scrollToTopBtnState onClick={scrollToTOP} ref={scrollBtnRef}>
          ▲
        </ScrollToTopBtn>
      )}
    </Layout>
  );
};

export default TestLayout;

interface IScrollToTopBtn {
  scrollToTopBtnState: boolean;
}

const LogoWrapper = styled.div`
  width: 40%;
  min-width: 250px;
`;

const LogoImg = styled.img`
  width: 100%;
  cursor: pointer;
`;

const Layout = styled.div`
  background-color: #F7F7F9;
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

const ScrollToTopBtn = styled.div<IScrollToTopBtn>`
  position: fixed;
  border-radius: 10px;
  padding: 10px 20px;
  transition-property: opacity;
  transition-duration: 1s;
  background-color: #D2302C;
  bottom: 15px;
  right: 15px;
  z-index: 119;
  color: white;
  cursor: pointer;

  display: ${(props) => (props.scrollToTopBtnState ? 'block' : 'none')};
  opacity: ${(props) => (props.scrollToTopBtnState ? '1' : '0')};
`;
