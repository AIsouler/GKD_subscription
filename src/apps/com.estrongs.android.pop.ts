import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.estrongs.android.pop',
  name: 'ES文件浏览器',
  groups: [
    {
      key: 0,
      name: '内部弹窗广告',
      rules: [
        {
          activityIds: 'com.fighter.loader.view.InteractTemplateAdDialog',
          matches: '[id="com.estrongs.android.pop:id/iv_close"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12509667',
        },
        {
          activityIds: 'com.estrongs.android.pop.view.FileExplorerActivity',
          matches:
            'TextView[text!=null] < FrameLayout - ImageView - FrameLayout > ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12509669',
        },
      ],
    },
  ],
});
