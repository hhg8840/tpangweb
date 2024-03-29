import { Menu } from 'antd';
import Link from 'next/link';
import shortid from 'shortid';

export const menuOne = (
  <Menu>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/wireCleaner`}>유선청소기</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/fpsKeyboard`}>FPS 키보드</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/dvdPlayer`}>DVD플레이어</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/ecoro`}>전기스쿠터</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/calcium`}>칼슘</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/4kmonitor`}>4k모니터</Link>
    </Menu.Item>
    {/*<Menu.Item key={shortid.generate()}>*/}
    {/*  <Link href={`/post/gamingHeadSet`}>게이밍해드셋</Link>*/}
    {/*</Menu.Item>*/}
    {/*<Menu.Item key={shortid.generate()}>*/}
    {/*  <Link href={`/post/webCam`}>웹캠</Link>*/}
    {/*</Menu.Item>*/}
    {/*<Menu.Item key={shortid.generate()}>*/}
    {/*  <Link href={`/post/portableMonitor`}>포터블모니터</Link>*/}
    {/*</Menu.Item>*/}
  </Menu>
);

export const menuTwo = (
  <Menu>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/200notebook`}>고사양 노트북</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/ipadPro4`}>iPad Pro 4세대</Link>
    </Menu.Item>
  </Menu>
);

export const menuThree = (
  <Menu>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/premiumHeadSet`}>고급헤드셋</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/elecGuitar`}>일렉기타</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/27monitor`}>24인치모니터</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/27monitor`}>27인치모니터</Link>
    </Menu.Item>
    <Menu.Item key={shortid.generate()}>
      <Link href={`/post/3wallet`}>3단지갑</Link>
    </Menu.Item>
  </Menu>
);
