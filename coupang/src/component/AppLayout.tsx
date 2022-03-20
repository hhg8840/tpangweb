import styled from 'styled-components';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { indexStateAtom } from 'src/Atoms/atom';
import { menuOne, menuThree, menuTwo } from './Menu';
import SearchInput from './SearchInput';

interface Props {
  children: React.ReactNode;
  keywords?: string[];
}

const AppLayout: React.FunctionComponent<Props> = ({ children, keywords }) => {
  const items: { value: string }[] = [];
  keywords?.map((el) => items.push({ value: el }));
  const indexState = useRecoilValue(indexStateAtom);

  return (
    <Layout>
      <Header>
        <Link href="/">
          <Home>Home</Home>
        </Link>
        <StyledDropdown overlay={menuOne}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            전자기기
            <DownOutlined />
          </a>
        </StyledDropdown>
        <StyledDropdown overlay={menuTwo}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            생활가전
            <DownOutlined />
          </a>
        </StyledDropdown>
        <StyledDropdown overlay={menuThree}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            기타
            <DownOutlined />
          </a>
        </StyledDropdown>

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

export default AppLayout;

const Home = styled.a`
  color: white;
  cursor: pointer;
  margin-right: 3.875rem;
  margin-left: 1.875rem;
`;

const StyledDropdown = styled(Dropdown)`
  color: white;
  + a {
    margin-left: 3rem;
  }
  .ant-dropdown-menu-title-content {
    display: flex !important;
    flex-direction: column !important;
    a {
      padding: 10px 0;
    }
  }
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
  border-bottom: 1px solid #d9d9d9;
  height: 4rem;
  font-size: 1.1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    margin-left: 5px;
  }
`;

const Footer = styled.div`
  margin-top: 50px;
  padding: 50px 0;
  font-size: 1rem;
  color: white;
`;

const IframeWrapper = styled.div`
  width: 30%;
  margin-left: auto;
  margin-top: 10px;
  margin-right: 10px;
  min-width: 160px;
`;
