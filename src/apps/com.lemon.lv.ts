import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lemon.lv',
  name: '剪映',
  groups: [
    {
      key: 0,
      name: '局部广告-导出界面底部广告',
      desc: '关闭完成导出后的下方广告',
      activityIds: 'com.vega.export.edit.view.ExportActivity',
      rules: [
        {
          key: 0,
          matches: '@FlattenUIImage + LynxAdComponentView',
          snapshotUrls: 'https://i.gkd.li/import/12911010',
        },
        {
          key: 1,
          matches:
            '[vid="exportAdContainer"] FrameLayout[childCount=7] > FlattenUIImage[index=6]',
          exampleUrls:
            'https://m.gkd.li/57941037/bc46565b-16ac-4415-8165-13d075f28fcf',
          snapshotUrls: 'https://i.gkd.li/import/14149461',
        },
      ],
    },
  ],
});
