import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qidian.QDReader',
  name: '起点读书',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.qidian.QDReader.ui.activity.SplashADActivity',
        'com.qidian.QDReader.ui.activity.SplashImageActivity',
      ],
      rules: 'Button[text^=`跳过`]',
      snapshotUrls: ['https://i.gkd.li/import/import/12508836'],
    },
    {
      key: 1,
      name: '更新弹窗',
      quickFind: true,
      activityIds: [
        'com.qidian.QDReader.framework.widget.dialog.judian',
        'com.tencent.upgrade.ui.UpgradeDialogActivity',
      ],
      rules: [
        {
          matches:
            'TextView[text$="新版本"] +(2) RelativeLayout >(4) TextView[text="以后再说"]',
          snapshotUrls: ['https://i.gkd.li/import/import/12641026'],
        },
        {
          matches: '[id="com.qidian.QDReader:id/upgrade_dialog_close_btn"]',
          snapshotUrls: ['https://i.gkd.li/import/import/13116821'],
        },
      ],
    },
    {
      key: 2,
      name: '青少年模式弹窗',
      activityIds: [
        'com.qidian.QDReader.bll.helper.z0',
        'com.qidian.QDReader.ui.activity.MainGroupActivity',
        'com.qidian.QDReader.framework.widget.dialog.judian',
      ],
      rules:
        '[id="com.qidian.QDReader:id/btnEnterTeen"] + [id="com.qidian.QDReader:id/btnCancel"]',
      snapshotUrls: [
        'https://i.gkd.li/import/import/12640241',
        'https://i.gkd.li/import/import/12709168',
        'https://i.gkd.li/import/12905817',
      ],
    },
    {
      key: 3,
      name: '活动弹窗',
      activityIds: [
        'com.qidian.QDReader.ui.activity.MainGroupActivity',
        'com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI',
        'com.qidian.QDReader.framework.widget.dialog.judian',
      ],
      rules:
        '[id="com.qidian.QDReader:id/imgBKT"] + [id="com.qidian.QDReader:id/imgClose"]',
      snapshotUrls: [
        'https://i.gkd.li/import/import/12640195',
        'https://i.gkd.li/import/import/12640158',
        'https://i.gkd.li/import/12818198',
      ],
    },
    {
      enable: false,
      key: 4,
      name: '系统推送提示信息',
      desc: '点击顶部提醒左侧x按钮',
      activityIds: ['com.afollestad.materialdialogs.MaterialDialog'],
      rules: '@[id="com.qidian.QDReader:id/ivClose"] + [text^="开启推送"]',
      snapshotUrls: ['https://i.gkd.li/import/import/12640242'],
    },
    {
      key: 5,
      name: '右侧悬浮广告',
      activityIds: ['com.qidian.QDReader.ui.activity.MainGroupActivity'],
      rules:
        '[id="com.qidian.QDReader:id/ivAd"] + [id="com.qidian.QDReader:id/ivAdClose"]',
      snapshotUrls: ['https://i.gkd.li/import/import/12717032'],
    },
    {
      enable: false,
      key: 10,
      name: '起点中文网登录自动确认',
      desc: '自动点击【登录】',
      activityIds: 'com.qidian.QDReader.ui.activity.QDBrowserActivity',
      rules: '[id="scanLogin"]',
      snapshotUrls: 'https://i.gkd.li/import/import/12903081',
    },
  ],
});
