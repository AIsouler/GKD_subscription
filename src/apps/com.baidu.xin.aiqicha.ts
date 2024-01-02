import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.xin.aiqicha',
  name: '爱企查',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: [
        'com.baidu.newbridge.fast.MainFastActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: '[id="com.baidu.xin.aiqicha:id/update_cancel"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12755738',
        'https://i.gkd.li/import/12755762', // activityId: 'com.miui.home.launcher.Launcher'
      ],
    },
    {
      key: 10,
      name: '请求通知权限弹窗',
      desc: '自动点击【不允许】',
      activityIds: 'com.baidu.newbridge.fast.MainFastActivity',
      rules: '[id="com.baidu.xin.aiqicha:id/notice_dialog_cancel_iv"]',
      snapshotUrls: 'https://i.gkd.li/import/12755733',
    },
    {
      key: 11,
      name: '请求通知权限提示信息',
      desc: '自动点击x按钮',
      activityIds: 'com.baidu.newbridge.fast.MainFastActivity',
      rules: '@[id="com.baidu.xin.aiqicha:id/close"] +2 [text="打开消息通知"]',
      snapshotUrls: 'https://i.gkd.li/import/12755756',
    },
  ],
});
