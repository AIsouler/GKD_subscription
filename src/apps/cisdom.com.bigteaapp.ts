import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cisdom.com.bigteaapp',
  name: '大茶肆',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      quickFind: true,
      matchTime: 10000,
      rules:
        '[text$="抽奖送大礼"] < WebView - [id="cisdom.com.bigteaapp:id/close"]',
      snapshotUrls: 'https://i.gkd.li/import/13228579',
    },
  ],
});
