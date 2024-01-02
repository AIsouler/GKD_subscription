import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zmzx.college.search',
  name: '大学搜题酱',
  groups: [
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
            'https://i.gkd.li/import/13345633', //
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
        {
          key: 3,
          name: '字节广告-1',
          activityIds:
            'com.zmzx.college.search.activity.camerasdk.ZybCameraSDKActivity',
          matches:
            '[id="com.zmzx.college.search:id/ad_flag_source_layout"] + [id="com.zmzx.college.search:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13522998',
        },
        {
          key: 4,
          name: '字节广告-2',
          activityIds:
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
          matches: '@Image < View +3 View > View > TextView[text$="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13523288',
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

      activityIds: [
        'com.zmzx.college.search.activity.booksearch.result.activity.SearchScanCodeResultDxActivity',
      ],
      rules: '[id="com.zmzx.college.search:id/close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13063381',
        'https://i.gkd.li/import/13346621', //
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
        'com.zmzx.college.search.activity.init.InitActivity',
      ],
      rules: '[id="com.zmzx.college.search:id/update_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13063373',
        'https://i.gkd.li/import/13623469',
      ],
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
    {
      key: 7,
      name: '请求好评弹窗',
      activityIds:
        'com.zmzx.college.search.activity.camerasdk.ZybCameraSDKActivity',
      quickFind: true,
      rules:
        '[id="com.zmzx.college.search:id/iv_logo"] + [id="com.zmzx.college.search:id/siv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13476308',
    },
  ],
});
