import { IData } from '@customTypes/allTypes';

export const kakaoShare = (data: IData) => {
  const { Kakao } = window;
  const shareURL = data.productUrl;

  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: data.keyword + ' 추천 순위 TOP10',
      description: data.keyword + ' 추천 순위 TOP10',
      imageUrl: data.productImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL,
        androidExecParams: shareURL,
        iosExecParams: shareURL,
      },
    },
    buttons: [
      {
        title: '웹으로 보기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
          androidExecParams: shareURL,
          iosExecParams: shareURL,
        },
      },
    ],
  });
};
