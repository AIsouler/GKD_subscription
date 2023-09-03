import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.weico.international',
  name: '微博轻享版',
  groups: [
    {
      key: 0,
      name: '主页-推荐流广告',
      activityIds: 'com.weico.international.activity.MainFragmentActivity',
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
          ],
        },
      ],
    },
  ],
});
