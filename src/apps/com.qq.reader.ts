import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qq.reader',
  name: 'QQ阅读',
  groups: [
    {
      key: 2,
      name: '青少年模式',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.qq.reader:id/tv_i_know"]',
      snapshotUrls: 'https://i.gkd.li/import/13194867',
    },
    {
      key: 3,
      name: '局部广告-右下角悬浮卡片广告',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.qq.reader.activity.MainActivity',
          matches: '[id="com.qq.reader:id/operating_activity_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/17b6444c-e275-4ee4-b1d7-bd7369e08e55',
          snapshotUrls: 'https://i.gkd.li/import/14140100',
        },
      ],
    },
    {
      key: 4,
      name: '更新提示-内测邀请弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[vid="upgrade_dialog_close_btn"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/03e35d57-5f40-4ccb-911a-5f9061eab46e',
          snapshotUrls: 'https://i.gkd.li/i/14376088',
        },
      ],
    },
  ],
});
