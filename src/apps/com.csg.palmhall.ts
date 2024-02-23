import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.csg.palmhall',
  name: '南网在线',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="关闭"] + [text="升级"]',
      snapshotUrls: ['https://i.gkd.li/i/12700060'],
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      activityIds: ['com.csg.palmhall.MainActivity'],
      rules: 'View > Image +(3) [text="不再显示"][clickable=true]',
      snapshotUrls: ['https://i.gkd.li/i/12700075'],
    },
  ],
});
