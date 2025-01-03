import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.alcidae.smarthome',
  name: '海雀',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页通知弹窗',
      desc: '点击[不再提醒]并关闭弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.danale.video.mainpage.main.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="cb_not_show"][checked=false][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/02d8846c-6753-4efe-b944-ea024f7485ad',
          snapshotUrls: 'https://i.gkd.li/i/18291310',
        },
        {
          preKeys: [0],
          matches: '[vid="ibtn_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/02d8846c-6753-4efe-b944-ea024f7485ad',
          snapshotUrls: 'https://i.gkd.li/i/18291310',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      desc: '点击[取消]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.danale.video.mainpage.main.MainActivity',
          matches: [
            '[text*="开启通知"][visibleToUser=true]',
            '[text="取消"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/5f19c508-d4d3-4221-aafe-ab19845b3d4b',
          snapshotUrls: 'https://i.gkd.li/i/18059150',
        },
      ],
    },
  ],
});
