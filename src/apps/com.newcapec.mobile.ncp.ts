import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.newcapec.mobile.ncp',
  name: '完美校园',
  groups: [
    {
      key: 10,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.wanxiao.basebusiness.activity.SplashActivity',
          matches: '[id="com.newcapec.mobile.ncp:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12843377',
        },
      ],
    },
    {
      key: 11,
      name: '其他-密码过期提示弹窗',
      desc: '点击"取消"按钮',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.wanxiao.ui.activity.IndexActivity',
          matches: '[id="com.newcapec.mobile.ncp:id/dialog_oppotion"]',
          snapshotUrls: 'https://i.gkd.li/i/12843399',
        },
      ],
    },
  ],
});
