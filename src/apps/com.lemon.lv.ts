import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lemon.lv',
  name: '剪映',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/13229094',
    },
    {
      key: 0,
      name: '导出界面底部广告',
      desc: '关闭完成导出后的下方广告',
      activityIds: 'com.vega.export.edit.view.ExportActivity',
      rules: [
        {
          matches: '@FlattenUIImage + LynxAdComponentView',
          snapshotUrls: 'https://i.gkd.li/import/12911010',
        },
      ],
    },
  ],
});
