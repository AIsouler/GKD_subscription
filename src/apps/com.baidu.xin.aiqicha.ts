import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.xin.aiqicha',
  name: '爱企查',
  deprecatedKeys: [0, 11],
  groups: [
    {
      key: 1,
      name: '更新提示',
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
      name: '通知提示-请求通知权限弹窗',
      desc: '自动点击【不允许】/关闭',
      activityIds: 'com.baidu.newbridge.fast.MainFastActivity',
      rules: [
        {
          key: 0,
          matches: '[id="com.baidu.xin.aiqicha:id/notice_dialog_cancel_iv"]',
          exampleUrls:
            'https://m.gkd.li/57941037/9c26bb3a-d770-429a-b211-46b97a47f5f0',
          snapshotUrls: 'https://i.gkd.li/import/12755733',
        },
        {
          key: 1,
          activityIds: 'com.baidu.newbridge.fast.MainFastActivity',
          matches:
            '@[id="com.baidu.xin.aiqicha:id/close"] +2 [text="打开消息通知"]',
          exampleUrls:
            'https://m.gkd.li/57941037/92a1bd1b-91c5-42a8-830b-9b721815d9a4',
          snapshotUrls: 'https://i.gkd.li/import/12755756',
        },
      ],
    },
    // key 11 已弃用
  ],
});
