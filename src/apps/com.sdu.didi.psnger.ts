import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sdu.didi.psnger',
  name: '滴滴出行',
  groups: [
    {
      key: 1,
      name: '局部广告-打车页面右上角红包广告',
      desc: '点击卡片广告左上角x',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.didi.sdk.app.MainActivity',
          matches:
            'ImageView[id="com.sdu.didi.psnger:id/second_entrance_img"] + @ImageView[id="com.sdu.didi.psnger:id/left_close_img"]',
          snapshotUrls: 'https://i.gkd.li/i/13760846',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.didi.sdk.app.MainActivity',
          matches: '[vid="iv_upgrade_btn_ignore"]',
          exampleUrls:
            'https://m.gkd.li/57941037/ba2a4ef6-d63d-4d67-ab89-222085ea3b3f',
          snapshotUrls: 'https://i.gkd.li/i/14582620',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.didi.sdk.app.MainActivity',
          matches: '[vid="popClose"][desc="关闭弹窗"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/432c28dd-2489-47cf-a975-4ef2e4704615',
          snapshotUrls: 'https://i.gkd.li/i/18173921',
        },
      ],
    },
  ],
});
