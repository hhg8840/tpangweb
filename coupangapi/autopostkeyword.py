from coupang import cupang_keyword_search, get_cuplink
import os
import json
import datetime
now_path = os.path.dirname(os.path.abspath(__file__))
file = open(f'{now_path}/setting.json',
            'r', encoding='utf-8')
config_dict = json.load(file)


def main():

    keyword = '전기스쿠터'
    files_Path = f"{now_path}/product_posts/"

    limit = 10
    product_list = cupang_keyword_search(keyword, limit)

    print(product_list)

    # TRANSLATE LINK
    originUrlList  = []
    for product in product_list:
        productId = product['productId']

        transUrl = f'https://www.coupang.com/vp/products/{productId}'
        originUrlList.append(transUrl)

    cupResult = get_cuplink(originUrlList)

    for idx,product in enumerate(product_list):
        product['productUrl'] = cupResult[idx]['shortenUrl']

    #[STEP 3] : POST TO JSON
    resDict = dict()
    resDict['title'] = keyword
    resDict['item_list'] = []
    for product in product_list:
        curDict = dict()
        curDict = product
        resDict['item_list'].append(curDict)

    # SAVE JSON
    cur_time = datetime.datetime.utcnow().strftime('%Y%m%d')
    save_time = f'{str(cur_time)}'

    ## 여기
    with open(f'{now_path}/product_posts/{keyword}-{save_time}@.json', 'w', encoding='UTF-8') as file:
        file.write(json.dumps(resDict, ensure_ascii=False))

if __name__ == "__main__":
    main()