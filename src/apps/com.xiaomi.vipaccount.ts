import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaomi.vipaccount',
  name: '小米社区',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'miuix.appcompat.app.AlertDialog',
      rules:
        '@[text="稍后安装"] < LinearLayout - ScrollView >(4) [text="发现新版本"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642466',
    },
    {
      key: 2,
      name: '评论区广告卡片',
      activityIds: 'com.xiaomi.vipaccount.newbrowser.NormalWebActivity',
      rules: '[text="closeGray"][clickable=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642459',
    },
  ],
});
