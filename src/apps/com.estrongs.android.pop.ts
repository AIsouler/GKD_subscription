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
          snapshotUrls: 'https://i.gkd.li/import/import/12509667',
        },
        {
          activityIds: 'com.estrongs.android.pop.view.FileExplorerActivity',
          matches:
            'TextView[text!=null] < FrameLayout - ImageView - FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/import/12509669',
        },
      ],
    },
    {
      key: 1,
      name: '主页广告卡片',
      activityIds: 'com.estrongs.android.pop.view.FileExplorerActivity',
      rules: [
        {
          key: 0,
          matches:
            'ImageView - LinearLayout >(2) ImageView[id="com.estrongs.android.pop:id/close"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/import/import/12674919'],
        },
        {
          key: 1,
          matches:
            '@[id="com.estrongs.android.pop:id/close"] + [id^="com.estrongs.android.pop:id/ad_flag_source"]',
          snapshotUrls: ['https://i.gkd.li/import/12818281'],
        },
      ],
    },
  ],
});
