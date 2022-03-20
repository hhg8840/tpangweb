import { Menu } from 'antd';
import Link from 'next/link';
import shortid from 'shortid';

export const menuOne = (
  <Menu>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/blutoothSpeaker`}>블루투스스피커</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/blutoothMouse`}>블루투스마우스</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/keyboard`}>기계식키보드</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/notebook`}>노트북</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/actionCam`}>액션캠</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/monitor`}>모니터</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/gamingHeadSet`}>게이밍해드셋</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/webCam`}>웹캠</Link>
    </Menu.Item>
  </Menu>
);

export const menuTwo = (
  <Menu>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/washingMachine`}>통돌이세탁기</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/cleaner`}>청소기</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/gamingChair`}>게이밍의자</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/sandMaker`}>샌드메이커</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/footBat`}>족욕기</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/capsuleCoffee`}>캡슐커피머신</Link>
    </Menu.Item>
  </Menu>
);

export const menuThree = (
  <Menu>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/necklace`}>목걸이</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/manWallet`}>남자지갑</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/womanWallet`}>여자지갑</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/earRing`}>귀걸이</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/womanBracelet`}>여자팔찌</Link>
    </Menu.Item>
  </Menu>
);
