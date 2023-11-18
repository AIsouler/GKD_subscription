import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaomi.vipaccount',
  name: '小米社区',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.xiaomi.vipaccount:id/tv_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/12841023',
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'miuix.appcompat.app.AlertDialog',
      rules:
        '@[text="稍后安装"] < LinearLayout - ScrollView >(4) [text="发现新版本"]',
      snapshotUrls: 'https://i.gkd.li/import/12642466',
    },
    {
      key: 2,
      name: '评论区广告卡片',
      activityIds: 'com.xiaomi.vipaccount.newbrowser.NormalWebActivity',
      rules: '[text="closeGray"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/12642459',
    },
    {
      enable: false,
      key: 3,
      name: '签到弹窗',
      activityIds: 'com.xiaomi.vipaccount.newbrowser.NormalWebActivity',
      rules: '[text="签到赢权益"] +n Image[text*="cancel_circle"]',
      snapshotUrls: 'https://i.gkd.li/import/13328271',
    },
    {
      key: 4,
      name: '公告板弹窗',
      activityIds: 'com.xiaomi.vipaccount.ui.home.page.HomeFrameActivity',
      quickFind: true,
      rules: '[desc="公告版弹窗"] +2 [id="com.xiaomi.vipaccount:id/close"]',
      snapshotUrls: 'https://i.gkd.li/import/13400617',
    },
  ],
});
