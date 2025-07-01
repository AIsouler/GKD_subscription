import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.shark.jizhang',
  name: '鲨鱼记账',
  groups: [
    {
      key: 0,
      name: '局部广告-悬浮广告',
      rules: [
        {
          activityIds: '.module.main.MainActivity',
          matches:
            '[id="com.shark.jizhang:id/float_btn"] >2 [id="com.shark.jizhang:id/close_view"]',
          exampleUrls: 'https://e.gkd.li/b64da622-2632-4140-930b-89d0f8cbdee1',
          snapshotUrls: 'https://i.gkd.li/i/12518517',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.module.main.MainActivity',
          matches:
            '[id="com.shark.jizhang:id/sdv_image"] + [id="com.shark.jizhang:id/close_view"]',
          exampleUrls: 'https://e.gkd.li/1cad4c8f-fdb0-4608-8398-2c22d81d435d',
          snapshotUrls: 'https://i.gkd.li/i/12518500',
        },
      ],
    },
  ],
});
