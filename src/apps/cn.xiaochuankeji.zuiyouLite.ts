import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.xiaochuankeji.zuiyouLite',
  name: '皮皮搞笑',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '青少年模式',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="cn.xiaochuankeji.zuiyouLite:id/young_close_btn"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12745083',
        'https://i.gkd.li/import/13446652', //activityIds: 'cn.xiaochuankeji.zuiyouLite.ui.main.MainTest',
      ],
    },
    {
      enable: false,
      key: 2,
      name: '分段广告-信息流广告',
      quickFind: true,
      activityIds: 'cn.xiaochuankeji.zuiyouLite.ui.slide.ActivitySlideDetail',
      rules: [
        {
          key: 0,
          name: '点击"x"',
          matches: '[id="cn.xiaochuankeji.zuiyouLite:id/ad_remove"]',
          snapshotUrls: 'https://i.gkd.li/import/13387116',
        },
        {
          preKeys: 0,
          name: '点击"不喜欢广告主"',
          matches: '@LinearLayout[clickable=true] > [text="不喜欢广告主"]',
          snapshotUrls: 'https://i.gkd.li/import/13387155',
        },
      ],
    },
  ],
});
