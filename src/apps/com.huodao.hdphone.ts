import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huodao.hdphone',
  name: '找靓机',
  groups: [
    {
      key: 1,
      fastQuery: true,
      name: '全屏广告-超级补贴日弹窗',
      desc: '点击X',
      rules: [
        {
          matches:
            '[id="android:id/content"] >2 [id="com.huodao.hdphone:id/dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13927567',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.huodao.hdphone.mvp.view.main.NewMainActivity',
          matches: '[vid="iv_recycle_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/dc1534ca-9ab1-4d7b-8da4-6c7992882c94',
          snapshotUrls: 'https://i.gkd.li/i/15052025',
        },
      ],
    },
  ],
});
