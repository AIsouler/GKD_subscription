import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.wps.yun',
  name: '金山文档',
  groups: [
    {
      key: 1,
      name: '局部广告-列表卡片广告',
      desc: '点击右侧x',
      rules: [
        {
          activityIds: 'cn.wps.yun.ui.IndexActivity',
          quickFind: true,
          matches:
            '[id="cn.wps.yun:id/rootGroup"][childCount=5] >  [id="cn.wps.yun:id/moreIconRight"]',
          exampleUrls:
            'https://m.gkd.li/47232102/bc97cb52-aad0-4114-a548-5831edbe342d',
          snapshotUrls: 'https://i.gkd.li/import/13495062',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text="发现新版本"] +3 [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/import/14333103',
    },
  ],
});
