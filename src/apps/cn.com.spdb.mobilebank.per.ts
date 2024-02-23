import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.com.spdb.mobilebank.per',
  name: '浦发银行',
  deprecatedKeys: [0],
  groups: [
    {
      enable: false,
      key: 1,
      name: '通知提示-系统通知请求',
      desc: '自动点击关闭。',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="去开启"] + View > Image[text.length=0]',
      snapshotUrls: 'https://i.gkd.li/i/13458535',
    },
  ],
});
