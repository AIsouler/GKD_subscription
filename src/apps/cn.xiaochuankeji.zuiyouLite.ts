import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.xiaochuankeji.zuiyouLite',
  name: '皮皮搞笑',
  deprecatedKeys: [0],
  groups: [
    {
      key: -1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionCdKey: -1,
      actionMaximumKey: -1,
      rules: [
        {
          key: 0,
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12745084',
        },
        {
          key: 1,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/i/12745095',
            'https://i.gkd.li/i/13387320',
          ],
        },
        {
          key: 2,
          action: 'clickCenter',
          position: {
            left: 'width * 0.8778',
            top: 'width * 0.1667',
          },
          matches:
            '[id$="spalsh_ad_view"] >4 [id$="native_container"] >2 [id$="id/contentView"]', // 避免选中其他开屏广告节点
          exampleUrls:
            'https://m.gkd.li/57941037/485963ab-07b1-412a-a932-badc50cb2688',
          snapshotUrls: 'https://i.gkd.li/i/13399391',
        },
      ],
    },
    {
      key: 1,
      name: '青少年模式',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="cn.xiaochuankeji.zuiyouLite:id/young_close_btn"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12745083',
        'https://i.gkd.li/i/13446652', //activityIds: 'cn.xiaochuankeji.zuiyouLite.ui.main.MainTest',
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
          snapshotUrls: 'https://i.gkd.li/i/13387116',
        },
        {
          preKeys: 0,
          name: '点击"不喜欢广告主"',
          matches: '@LinearLayout[clickable=true] > [text="不喜欢广告主"]',
          snapshotUrls: 'https://i.gkd.li/i/13387155',
        },
      ],
    },
  ],
});
