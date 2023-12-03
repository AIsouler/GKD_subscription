import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.julanling.app',
  name: '安心记加班',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13523606',
    },
    {
      key: 5,
      name: '广告弹窗',
      activityIds: 'com.julanling.dgq.main.view.MainFragmentActivity',
      rules:
        'FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]',
      snapshotUrls: 'https://i.gkd.li/import/13523567',
    },
  ],
});
