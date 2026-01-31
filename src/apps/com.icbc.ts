import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.icbc',
  name: '中国工商银行',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.main.MainActivity',
          matches: '[id="com.icbc:id/tv_time"][text*="跳过"][text.length<=6]',
          snapshotUrls: 'https://i.gkd.li/i/13330431',
        },
      ],
    },
    {
      key: 2,
      name: '评价提示',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          matches: [
            '[text^="觉得“中国工商银行”好用吗"]',
            '[text="下次再说"][clickable=true]',
          ],
          exampleUrls: 'https://e.gkd.li/85e48265-4269-4122-a70f-5361698954c0',
          snapshotUrls: [
            'https://i.gkd.li/i/18296892',
            'https://i.gkd.li/i/24981859',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-右下角浮标广告',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.activity.web.ICBCWebView',
            '.activity.main.MainActivity',
          ],
          matches: '[vid="iv_close_task_center"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22616307',
            'https://i.gkd.li/i/23227312',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '功能类-未登录时自动点击登录',
      desc: '仅限老年版和英文版可用',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.main.MainActivity',
          matches:
            '[vid="rl_remit_login_button_background"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23227516',
            'https://i.gkd.li/i/23227551',
          ],
        },
      ],
    },
  ],
});
