import { Menu } from 'antd';
import Link from 'next/link';
import shortid from 'shortid';

const ssr = process.env.NODE_ENV === 'development' ? '/' : '/index.html';
export const menuOne = (
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

export const menuTwo = (
  <Menu>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/washingMachine${ssr}`}>통돌이세탁기</Link>
    </Menu.Item>
  </Menu>
);

export const menuThree = (
  <Menu>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/necklace${ssr}`}>목걸이</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/manWallet${ssr}`}>남자지갑</Link>
    </Menu.Item>
  </Menu>
);
