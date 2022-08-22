import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import React, { useEffect } from 'react';
import Head from 'next/head';
import shortid from 'shortid';
import { RecoilRoot } from 'recoil';
declare global {
  interface Window {
    Kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   window.Kakao.init('165163d956f3dc6ad7639f6592e9c37a');
  // }, []);
  return (
    <div>
      <Head>
        <meta
          key={shortid.generate()}
          name="description"
          content="2022 가전제품, 생활용품 인기 추천 순위를 알려드립니다."
        />
        {/*<meta http-equiv="Refresh" content="5; url=https://link.coupang.com/a/win9e"/>*/}
        <meta key={shortid.generate()} name="keyword" content="키보드추천, 노트북추천, 마우스추천, " />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} key={shortid.generate()} />
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
