import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.xin.aiqicha',
  name: '爱企查',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.baidu.newbridge.fast.MainFastActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: '[id="com.baidu.xin.aiqicha:id/time"][text="跳过"]',
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12755760',
        'https://gkd-kit.songe.li/import/12755761', // activityId: 'com.miui.home.launcher.Launcher'
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: [
        'com.baidu.newbridge.fast.MainFastActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: '[id="com.baidu.xin.aiqicha:id/update_cancel"]',
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12755738',
        'https://gkd-kit.songe.li/import/12755762', // activityId: 'com.miui.home.launcher.Launcher'
      ],
    },
    {
      key: 10,
      name: '请求通知权限弹窗',
      desc: '自动点击【不允许】',
      activityIds: 'com.baidu.newbridge.fast.MainFastActivity',
      rules: '[id="com.baidu.xin.aiqicha:id/notice_dialog_cancel_iv"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12755733',
    },
    {
      key: 11,
      name: '请求通知权限提示信息',
      desc: '自动点击x按钮',
      activityIds: 'com.baidu.newbridge.fast.MainFastActivity',
      rules: '@[id="com.baidu.xin.aiqicha:id/close"] +2 [text="打开消息通知"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12755756',
    },
  ],
});
