import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zmzx.college.search',
  name: '大学搜题酱',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      activityIds: 'com.zmzx.college.search.activity.init.InitActivity',
      rules: ['TextView[text^="跳过"][text.length<=3]'],
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12867875',
        'https://gkd-kit.songe.li/import/12867970',
        'https://gkd-kit.songe.li/import/12881929',
      ],
    },
    {
      enable: false,
      key: 1,
      name: '首页-推送通知',
      activityIds:
        'com.zmzx.college.search.activity.main.activity.MainActivity',
      rules: 'ImageView[id="com.zmzx.college.search:id/siv_dialog_close"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12867853',
    },
    {
      key: 2,
      name: '我的-弹窗广告',
      activityIds:
        'com.zmzx.college.search.activity.main.activity.MainActivity',
      rules: 'ImageView[id="com.zmzx.college.search:id/iv_close"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12867751',
    },
    {
      key: 3,
      name: '资料库-弹窗广告',
      activityIds: [
        'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      ],
      rules:
        '@LinearLayout > ImageView[id="com.zmzx.college.search:id/tt_reward_full_count_down_after_close"]',
      quickFind: true,
      snapshotUrls: 'https://gkd-kit.songe.li/import/12893408',
    },
  ],
});
