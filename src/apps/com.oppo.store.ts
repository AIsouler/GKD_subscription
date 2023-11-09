import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.oppo.store',
  name: 'OPPO商城',
  groups: [
    {
      key: 1,
      name: '升级提示',
      desc: '点击下次再说',
      quickFind: true,
      actionMaximum: 1,
      activityIds: 'com.oppo.store.MainActivity',
      rules: '@[text="下次再说"] -n [text="发现新版本"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13295202',
    },
    {
      key: 2,
      name: '弹窗广告',
      quickFind: true,
      activityIds: 'com.oppo.store.MainActivity',
      rules: 'ImageView[id="com.oppo.store:id/dialog_delete"][desc="关闭"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13295201',
    },
  ],
});
