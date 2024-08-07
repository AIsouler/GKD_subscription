import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cn21.ecloud',
  name: '天翼云盘',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      activityIds: 'com.cn21.ecloud.activity.MainPageActivity',
      rules: [
        {
          matches:
            '[id="com.cn21.ecloud:id/content_frame"] >(5,7) View[childCount=2] > ImageView[childCount=0][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12865481',
            'https://i.gkd.li/i/12865488',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.cn21.ecloud:id/ivCancel"]',
      snapshotUrls: 'https://i.gkd.li/i/13399488',
    },
  ],
});
