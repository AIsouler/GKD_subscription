import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'make.more.r2d2.cellular_z',
  name: 'Cellular-Z',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: 'make.more.r2d2.cellular_z.activity.SplashGMActivity',
      rules: [
        {
          matches: '[text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12648511',
        },
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/12747314',
        },
      ],
    },
    {
      key: 2,
      name: '更新弹窗',
      resetMatch: 'app',
      actionMaximum: 1,
      matchTime: 10000,
      quickFind: true,
      rules: [
        {
          matches: [
            '[id="make.more.r2d2.cellular_z:id/tv_alert_title"][text="发现新版本"]',
            '[id="make.more.r2d2.cellular_z:id/btn_alert_left"][text="取消"]',
          ], //防止误触其它取消按钮
          snapshotUrls: 'https://i.gkd.li/import/13608563',
        },
      ],
    },
  ],
});
