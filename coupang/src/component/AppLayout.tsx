import React from 'react';
import styled from 'styled-components';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Link from 'next/link';

type Props = {};

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const menu = (
    <Menu>
      <Menu.Item>
        <Link href="/post/blutoothSpeaker">블루투스 스피커</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <Layout>
      <Header>
        <Link href="/">
          <Home>Home</Home>
        </Link>
        <StyledDropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            전자기기
            <DownOutlined />
          </a>
        </StyledDropdown>
        <StyledDropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            생활가전
            <DownOutlined />
          </a>
        </StyledDropdown>
        <StyledDropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            악세사리
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
