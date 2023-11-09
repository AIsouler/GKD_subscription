import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.weico.international',
  name: '微博轻享版',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'TextView[text^="跳过"][text.length<10]',
      snapshotUrls: [
        'https://i.gkd.li/import/import/12509123',
        'https://i.gkd.li/import/import/12510132',
        'https://i.gkd.li/import/12740537', // activityId: 'com.sina.weibo.ad'
      ],
    },
    {
      key: 0,
      name: '推荐流广告',
      desc: '主页,搜索页',
      activityIds: [
        'com.weico.international.activity.MainFragmentActivity',
        'com.weico.international.ui.search.SearchActivity',
      ],
      exampleUrls:
        'https://github.com/gkd-kit/subscription/assets/38517192/e713a2ca-5048-486a-874f-dd876d53c49b',
      rules: [
        {
          preKeys: [1],
          name: '点击不感兴趣',
          matches: '@View > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/import/12505755',
            'https://i.gkd.li/import/import/12505764',
          ],
        },
        {
          key: 0,
          name: '点击广告卡片右上角[x]',
          matches: '[id="com.weico.international:id/item_timeline_ad_action"]',
          snapshotUrls: [
            'https://i.gkd.li/import/import/12505753',
            'https://i.gkd.li/import/import/12505763',
            'https://i.gkd.li/import/12857202',
          ],
        },
      ],
    },
  ],
});
