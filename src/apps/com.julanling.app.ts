import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.julanling.app',
  name: '安心记加班',
  groups: [
    {
      key: 5,
      name: '全屏广告-广告弹窗',
      activityIds: 'com.julanling.dgq.main.view.MainFragmentActivity',
      rules:
        'FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]',
      snapshotUrls: 'https://i.gkd.li/import/13523567',
    },
  ],
});
