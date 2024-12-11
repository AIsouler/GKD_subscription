import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dataoke.union',
  name: '大淘客联盟',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      desc: '点击取消',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.dtk.plat_home_lib.index.activity.IndexActivity',
            'com.dtk.plat_web_lib.X5WebViewActivity',
          ],
          matches: ['[text^="你还没有打开通知哦"]', '[text="取消"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/13446826',
            'https://i.gkd.li/i/18094567',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.dtk.plat_web_lib.X5WebViewActivity',
          matches: '[vid="img_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/a1cfa798-0fb1-456c-9875-dd3387f5b7e0',
          snapshotUrls: 'https://i.gkd.li/i/18094553',
        },
      ],
    },
  ],
});
