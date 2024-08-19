import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cn21.ecloud',
  name: '天翼云盘',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      fastQuery: true,
      activityIds: 'com.cn21.ecloud.activity.MainPageActivity',
      rules: [
        {
          matches:
            'FrameLayout > View[childCount=1] > View[childCount=1] >(1,4) View[childCount=2][desc=null] > @ImageView[clickable=true][visibleToUser=true] <<n [vid="content_frame"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12865488',
            'https://i.gkd.li/i/16653930',
            'https://i.gkd.li/i/16647901', // 防止误触
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
