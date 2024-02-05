import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.taobao.litetao',
  name: '淘特',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.taobao.ltao.maintab.MainFrameActivity',
      rules:
        '[id="com.taobao.litetao:id/root_layout"] > TextView[text^="还剩"&&text$="秒"]',
      snapshotUrls: 'https://i.gkd.li/import/12774851',
    },
    {
      key: 1,
      name: '更新提示-版本升级弹窗',
      activityIds: [
        'com.taobao.ltao.maintab.MainFrameActivity',
        'com.taobao.litetao.launcher.ALiFlutterActivityCompat',
      ],
      rules: '[id = "com.taobao.litetao:id/update_imageview_cancel_v2"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12843615',
        'https://i.gkd.li/import/12843614',
      ],
    },
  ],
});
