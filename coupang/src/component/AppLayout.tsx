import React from 'react';
import styled from 'styled-components';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Link from 'next/link';
import shortid from 'shortid';

type Props = {};

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const ssr = process.env.NODE_ENV === 'development' ? '/' : '/index.html';

  const menuOne = (
    <Menu>
      <Menu.Item key={shortid.generate()}>
        <Link href={`/post/blutoothSpeaker${ssr}`}>블루투스스피커</Link>
      </Menu.Item>
      <Menu.Item key={shortid.generate()}>
        <Link href={`/post/blutoothMouse${ssr}`}>블루투스마우스</Link>
      </Menu.Item>
      <Menu.Item key={shortid.generate()}>
        <Link href={`/post/keyboard${ssr}`}>기계식키보드</Link>
      </Menu.Item>
      <Menu.Item key={shortid.generate()}>
        <Link href={`/post/notebook${ssr}`}>노트북</Link>
      </Menu.Item>
      <Menu.Item key={shortid.generate()}>
        <Link href={`/post/actionCam${ssr}`}>액션캠</Link>
      </Menu.Item>
      <Menu.Item key={shortid.generate()}>
        <Link href={`/post/monitor${ssr}`}>모니터</Link>
      </Menu.Item>
    </Menu>
  );
  const menuTwo = (
    <Menu>
      <Menu.Item key={shortid.generate()}>
        <Link href={`/post/washingMachine${ssr}`}>통돌이세탁기</Link>
      </Menu.Item>
    </Menu>
  );
  const menuThree = (
    <Menu>
      <Menu.Item key={shortid.generate()}>
        <Link href={`/post/necklace${ssr}`}>목걸이</Link>
      </Menu.Item>
      <Menu.Item key={shortid.generate()}>
        <Link href={`/post/manWallet${ssr}`}>남자지갑</Link>
      </Menu.Item>
    </Menu>
  );
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
            패션/악세사리
            <DownOutlined />
          </a>
        </StyledDropdown>
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
  border-bottom: 2px solid #ffff;
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
