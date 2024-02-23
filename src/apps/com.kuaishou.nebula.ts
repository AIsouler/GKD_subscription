import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kuaishou.nebula',
  name: '快手极速版',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.kuaishou.nebula:id/positive"][text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/i/13196316',
    },
    {
      key: 2,
      name: '全屏广告-朋友推荐弹窗',
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      quickFind: true,
      rules: '@[vid="close_btn"] + [text="朋友推荐"]',
      snapshotUrls: 'https://i.gkd.li/i/14310639',
    },
  ],
});
