import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bilibili.studio',
  name: '必剪',
  groups: [
    {
      key: 0,
      name: '权限提示-通知权限',
      desc: '点击[不开启]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.bcut.homepage.widget.MainActivity',
      rules: [
        {
          key: 0,
          matches: 'TextView[text="开启设置"] - TextView[text="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/12867401', // 创作页面
        },
        {
          key: 1,
          matches: 'ImageView[id="com.bilibili.studio:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12908880', // 模板页面
        },
        {
          key: 2,
          matches: 'ImageView[id="com.bilibili.studio:id/iv_push_tips_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12908886', // 我的页面
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      desc: '勾选"忽略"-点击"以后再说"',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '勾选"忽略"',
          matches: '[text="忽略此版本的更新"][checked=false]',
          snapshotUrls: 'https://i.gkd.li/i/13496049',
        },
        {
          preKeys: [0],
          name: '点击"以后再说"',
          matches: '[id="com.bilibili.studio:id/update_btn_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/13496049',
        },
      ],
    },
  ],
});
