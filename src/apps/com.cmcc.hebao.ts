import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmcc.hebao',
  name: '和包',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds: 'com.cmcc.wallet.mocam.activity.home.WalletHomeActivity',
          matches:
            '@[clickable=true] > [text="dialog-delete"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/cb33c5b5-dd2e-4aa9-80d1-f7013f150305',
          snapshotUrls: 'https://i.gkd.li/i/14567338',
        },
      ],
    },
  ],
});
