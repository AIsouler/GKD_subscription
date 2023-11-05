import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'me.zhouzhuo810.zznote',
  name: '小周便签',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="me.zhouzhuo810.zznote:id/native_ad_container"] + [id^="me.zhouzhuo810.zznote:id/btn_next"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12798528',
        'https://i.gkd.li/import/12912217',
        'https://i.gkd.li/import/13059838',
      ],
    },
  ],
});
