import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.vipaccount',
  name: '小米社区',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'miuix.appcompat.app.AlertDialog',
          matches:
            '@[text="稍后安装"] < LinearLayout - ScrollView >(4) [text="发现新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/12642466',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-评论区卡片广告',
      rules: [
        {
          activityIds: 'com.xiaomi.vipaccount.newbrowser.NormalWebActivity',
          matches: '[text="closeGray"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12642459',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-签到弹窗',
      rules: [
        {
          activityIds: 'com.xiaomi.vipaccount.newbrowser.NormalWebActivity',
          matches: '[text="签到赢权益"] +n Image[text*="cancel_circle"]',
          snapshotUrls: 'https://i.gkd.li/i/13328271',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-公告板弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xiaomi.vipaccount.ui.home.page.HomeFrameActivity',
          matches:
            '[desc="公告版弹窗"] +2 [id="com.xiaomi.vipaccount:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/13400617',
        },
      ],
    },
  ],
});
