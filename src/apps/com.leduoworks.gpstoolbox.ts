import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.leduoworks.gpstoolbox',
  name: 'GPS工具箱',
  groups: [
    {
      key: 1,
      name: '首页占位广告',
      activityIds: 'com.leduoworks.gpstoolbox.frmt.MainFrmtActivity',

      quickFind: true,
      rules: '[id="com.leduoworks.gpstoolbox:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13062612',
    },
  ],
});
