import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.TuHu.android',
  name: '途虎养车',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="cn.TuHu.android:id/rl_activity_welcome_jump"]',
      snapshotUrls: 'https://i.gkd.li/import/12846408',
    },
    {
      key: 1,
      name: '广告弹窗',
      quickFind: true,
      activityIds: 'cn.TuHu.Activity.tuhutab.TuHuTabActivity',
      rules:
        '@[id="cn.TuHu.android:id/imgClose"] - [id="cn.TuHu.android:id/rlContent"] > [id="cn.TuHu.android:id/img_jump"]',
      snapshotUrls: 'https://i.gkd.li/import/13228818',
    },
    {
      key: 10,
      quickFind: true,
      name: '请求通知权限弹窗',
      activityIds: 'cn.TuHu.Activity.tuhutab.TuHuTabActivity',
      rules: '[text="开启推送提醒"] <2 * + [id="cn.TuHu.android:id/imgClose"]',
      snapshotUrls: 'https://i.gkd.li/import/13228796',
    },
  ],
});
