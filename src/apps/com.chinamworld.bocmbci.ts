import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamworld.bocmbci',
  name: '中国银行',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗',
      activityIds:
        'com.boc.bocsoft.mobile.bocmobile.buss.system.main.ui.MainActivity',
      resetMatch: 'app',
      rules: '[desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/i/17691747',
    },
  ],
});
