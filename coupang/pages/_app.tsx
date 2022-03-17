import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import { useEffect } from 'react';
import Head from 'next/head';
import shortid from 'shortid';
declare global {
  interface Window {
    Kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
  }, []);
  return (
    <div>
      <Head>
        <meta
          key={shortid.generate()}
          name="description"
          content="2022 가전제품, 생활용품 인기 추천 순위를 알려드립니다."
        />
        <meta key={shortid.generate()} name="keyword" content="키보드추천, 노트북추천, 마우스추천, " />
      </Head>
      <Component {...pageProps} key={shortid.generate()} />
    </div>
  );
}

export default MyApp;
