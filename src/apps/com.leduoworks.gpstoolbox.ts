import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.leduoworks.gpstoolbox',
  name: 'GPS工具箱',
  groups: [
    {
      key: 1,
      name: '局部广告-首页占位广告',
      activityIds: 'com.leduoworks.gpstoolbox.frmt.MainFrmtActivity',
      quickFind: true,
      rules: '[id="com.leduoworks.gpstoolbox:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13062612',
    },
  ],
});
