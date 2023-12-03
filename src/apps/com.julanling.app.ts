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
      rules: [
        {
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13523606',
        },
        {
          matches: '[id="com.julanling.app:id/adsail_skipView"]',
          snapshotUrls: 'https://i.gkd.li/import/13537961',
          exampleUrls:
            'https://m.gkd.li/38517192/7d7b9bc5-0246-4404-89c0-1b49d6b92256',
        },
      ],
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
