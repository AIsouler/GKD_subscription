import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lenovo.browser.hd',
  name: '联想浏览器HD',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules:
        '[text="发现新版本"] - * > [id="com.lenovo.browser.hd:id/fl_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13401982',
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[text="开启消息通知"] +n * > [id="com.lenovo.browser.hd:id/tv_cancle"]',
      snapshotUrls: 'https://i.gkd.li/i/13401980',
    },
  ],
});
