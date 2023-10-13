import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dw.btime',
  name: '亲宝宝',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      activityIds: 'com.dw.btime.MainHomeTabActivity',
      rules: '[id="com.dw.btime:id/ad_screen_skip_btn_v1"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12889257',
    },
    {
      key: 1,
      name: '应用内弹窗',
      quickFind: true,
      activityIds: 'com.dw.btime.MainHomeTabActivity',
      rules: '[id="com.dw.btime:id/iv_overlay_close"][clickable=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12889448',
    },
    {
      key: 2,
      name: '应用内横幅',
      quickFind: true,
      activityIds: 'com.dw.btime.MainHomeTabActivity',
      rules: '[id="com.dw.btime:id/old_baby_close"][clickable=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12889450',
    },
  ],
});
