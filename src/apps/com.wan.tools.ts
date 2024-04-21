import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wan.tools',
  name: '下载工具箱',
  groups: [
    {
      key: 1,
      name: '通知提示-公告弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: 'LinearLayout[childCount=2] > @[text="取消"] + [text="确认"]',
      snapshotUrls: 'https://i.gkd.li/i/13392027',
    },
    {
      key: 2,
      name: '功能类-自动识别解析链接',
      activityIds: 'com.one.downloadtools.ui.activity.HomeActivity',
      rules: '@[text="识别解析"] -2 * > [text^="检测到你复制链接"]',
      snapshotUrls: 'https://i.gkd.li/i/13392085',
    },
    {
      key: 3,
      name: '全屏广告-开通会员弹窗',
      activityIds: 'com.one.downloadtools.ui.activity.HomeActivity',
      rules: '[text^="开通会员"] < * +n * > [text="暂不"]',
      snapshotUrls: 'https://i.gkd.li/i/13392112',
    },
  ],
});
