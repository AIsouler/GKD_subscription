import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huodao.hdphone',
  name: '找靓机',
  groups: [
    {
      key: 1,
      quickFind: true,
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
  ],
});
