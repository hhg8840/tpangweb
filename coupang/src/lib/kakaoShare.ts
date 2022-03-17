import { IData } from '@customTypes/allTypes';

export const kakaoShare = (data: IData) => {
  const { Kakao, location } = window;
  const shareURL = data.productUrl;

  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: data.keyword + ' 추천 순위 TOP10',
      description: data.keyword + ' 추천 순위 TOP10',
      imageUrl: data.productImage,
      link: {
        webUrl: shareURL,
        mobileWebUrl: shareURL,
      },
    },
    buttons: [
      {
        title: '웹으로 보기',
        link: {
          webUrl: shareURL,
          mobileWebUrl: shareURL,
        },
      },
    ],
  });
};
