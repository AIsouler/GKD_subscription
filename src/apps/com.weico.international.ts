import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.weico.international',
  name: '微博轻享版',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      activityIds: [
        'com.weico.international.ui.ad.AdActivity',
        'com.sina.weibo.ad',
      ],
      rules: 'TextView[text*="跳过"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12509123',
        'https://gkd-kit.gitee.io/import/12510132',
        'https://gkd-kit.songe.li/import/12740537', // activityId: 'com.sina.weibo.ad'
      ],
    },
    {
      key: 0,
      name: '主页-推荐流广告',
      activityIds: [
        'com.weico.international.activity.MainFragmentActivity',
        'com.weico.international.ui.search.SearchActivity',
      ],
      exampleUrls:
        'https://github.com/gkd-kit/subscription/assets/38517192/e713a2ca-5048-486a-874f-dd876d53c49b',
      rules: [
        {
          activityIds:
            'com.google.android.material.bottomsheet.BottomSheetDialog',
          matches: '@View > [text="不感兴趣"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12505755',
            'https://gkd-kit.gitee.io/import/12505764',
          ],
        },
        {
          matches: '[id="com.weico.international:id/item_timeline_ad_action"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12505753',
            'https://gkd-kit.gitee.io/import/12505763',
            'https://gkd-kit.songe.li/import/12857202',
          ],
        },
      ],
    },
  ],
});
