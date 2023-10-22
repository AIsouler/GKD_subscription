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
        'https://i.gkd.li/import/12867875',
        'https://i.gkd.li/import/12867970',
        'https://i.gkd.li/import/12881929',
      ],
    },
    {
      enable: false,
      key: 1,
      name: '首页-推送通知',
      activityIds:
        'com.zmzx.college.search.activity.main.activity.MainActivity',
      rules: 'ImageView[id="com.zmzx.college.search:id/siv_dialog_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12867853',
    },
    {
      key: 2,
      name: '弹窗广告',
      desc: '会出现在搜题页面与我的页面',
      quickFind: true,
      activityIds: [
        'com.zmzx.college.search.activity.main.activity.MainActivity',
        'com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity',
      ],
      rules: 'ImageView[id="com.zmzx.college.search:id/iv_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12867751',
        'https://i.gkd.li/import/12894813',
      ],
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
      snapshotUrls: 'https://i.gkd.li/import/12893408',
    },
    {
      key: 4,
      name: '教材-底部广告',
      quickFind: true,
      activityIds: [
        'com.zmzx.college.search.activity.booksearch.result.activity.SearchScanCodeResultDxActivity',
      ],
      rules: '[id="com.zmzx.college.search:id/close"]',
      snapshotUrls: 'https://i.gkd.li/import/13063381',
    },
    {
      key: 5,
      name: '升级弹窗',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.zmzx.college.search.activity.main.activity.MainActivity',
      ],
      rules: '[id="com.zmzx.college.search:id/update_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13063373',
    },
  ],
});
