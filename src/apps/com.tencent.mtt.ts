import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.mtt',
  name: 'QQ浏览器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.tencent.mtt.MainActivity',
      rules: [
        '@View[id=null] + ImageView + FrameLayout TextView[text=`向上滑动或点击查看`]',
        {
          matches: '@LinearLayout[clickable=true] > TextView[text="跳过"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12472630'],
        },
      ],
    },
  ],
});
