import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.weico.international',
  name: '微博轻享版',
  groups: [
    {
      key: 0,
      name: '分段广告-信息流广告',
      desc: '出现在主页,搜索页',
      rules: [
        {
          key: 0,
          name: '点击广告卡片右上角[x]',
          quickFind: true,
          activityIds: [
            'com.weico.international.activity.MainFragmentActivity',
            'com.weico.international.ui.search.SearchActivity',
          ],
          matches: '[id="com.weico.international:id/item_timeline_ad_action"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12857202',
            'https://i.gkd.li/i/14444744',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击不感兴趣',
          activityIds:
            'com.google.android.material.bottomsheet.BottomSheetDialog',
          matches: '@View > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12505755',
            'https://i.gkd.li/i/12505764',
          ],
        },
      ],
    },
  ],
});
