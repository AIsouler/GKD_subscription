import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.finshell.wallet',
  name: '钱包',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.finshell.homepage.WalletNativeActionActivity',
          matches: '[vid="ivClose"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/b5a04cd0-2f5a-4161-838b-422552f1ba9e',
          snapshotUrls: 'https://i.gkd.li/i/16451563',
        },
      ],
    },
  ],
});
