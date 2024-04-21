import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oppo.store',
  name: 'OPPO商城',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '点击下次再说',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="下次再说"] -n [text="发现新版本"]',
      snapshotUrls: 'https://i.gkd.li/i/13295202',
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      quickFind: true,
      activityIds: 'com.oppo.store.MainActivity',
      rules: 'ImageView[id="com.oppo.store:id/dialog_delete"][desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/i/13295201',
    },
  ],
});
