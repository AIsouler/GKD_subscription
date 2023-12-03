import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.luna.music',
  name: '汽水音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.byted.pangle:id/tt_splash_skip_btn"]', // 删除旧规则[id$="/tt_splash_skip_btn"]，等出现[id="com.byted.pangle.m:id/tt_splash_skip_btn"] 快照再适配
      snapshotUrls: 'https://i.gkd.li/import/13533782',
    },
    {
      key: 2,
      name: 'VIP弹窗',
      desc: '直接关闭所有该样式弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          matches: '[id="com.luna.music:id/bullet_container"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13533795',
            'https://i.gkd.li/import/13533797',
          ],
        },
      ],
    },
  ],
});
