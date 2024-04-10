import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.julanling.app',
  name: '安心记加班',
  groups: [
    {
      key: 5,
      name: '全屏广告-弹窗广告',
      activityIds: 'com.julanling.dgq.main.view.MainFragmentActivity',
      rules:
        'FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]',
      snapshotUrls: 'https://i.gkd.li/i/13523567',
    },
  ],
});
