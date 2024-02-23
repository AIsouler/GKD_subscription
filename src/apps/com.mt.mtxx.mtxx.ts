import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mt.mtxx.mtxx',
  name: '美图秀秀',
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="升级新版客户端"] - [text="取消"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/13238352',
    },
    {
      key: 2,
      name: '全屏广告-VIP弹窗',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.mt.mtxx.mtxx.MainActivity',
          matches: '[vid="iv_close"][clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/d98355c6-1308-4ed1-bf29-56499e22446d',
          snapshotUrls: 'https://i.gkd.li/i/14368853',
        },
      ],
    },
  ],
});
