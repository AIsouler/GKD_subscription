import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zmzx.college.search',
  name: '大学搜题酱',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
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
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds:
        'com.zmzx.college.search.activity.main.activity.MainActivity',
      rules: 'ImageView[id="com.zmzx.college.search:id/siv_dialog_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12867853',
    },
    {
      key: 2,
      name: '弹窗广告',
      desc: '会出现在搜题页面与我的页面',
      matchLauncher: true,
      activityIds: [
        'com.zmzx.college.search.activity.main.activity.MainActivity',
        'com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity',
      ],
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          quickFind: true,
          matches: 'ImageView[id="com.zmzx.college.search:id/iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12867751',
            'https://i.gkd.li/import/12894813',
            'https://i.gkd.li/import/13345633', // matchLauncher: true,
          ],
        },
        {
          key: 1,
          name: '快手广告-1',
          matches:
            '[text="广告"] <2 ViewGroup -3 ViewGroup > @ViewGroup[clickable=true] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13346628',
        },
        {
          key: 2,
          name: '快手广告-2',
          matches: [
            'ViewGroup > ViewGroup > ViewGroup[childCount=2] > ImageView + [text="广告"]',
            'ViewGroup > ViewGroup > ViewGroup[childCount=1] > ImageView[childCount=0]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13451304',
        },
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
      matchLauncher: true,
      activityIds: [
        'com.zmzx.college.search.activity.booksearch.result.activity.SearchScanCodeResultDxActivity',
      ],
      rules: '[id="com.zmzx.college.search:id/close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13063381',
        'https://i.gkd.li/import/13346621', // matchLauncher: true,
      ],
    },
    {
      key: 5,
      name: '升级弹窗',
      enable: false,
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.zmzx.college.search.activity.main.activity.MainActivity',
      ],
      rules: '[id="com.zmzx.college.search:id/update_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13063373',
    },
    {
      key: 6,
      name: '申请开启推送通知弹窗',
      enable: false,
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          matches:
            '[text="开启推送通知"] - [id="com.zmzx.college.search:id/siv_dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13440939',
        },
      ],
    },
  ],
});
