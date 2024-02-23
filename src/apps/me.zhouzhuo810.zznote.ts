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
      rules: [
        '[id="me.zhouzhuo810.zznote:id/native_ad_container"] + [id^="me.zhouzhuo810.zznote:id/btn_next"]',
        '@LinearLayout > [text*="跳过"]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/i/12798528',
        'https://i.gkd.li/i/12912217',
        'https://i.gkd.li/i/13059838',
        'https://i.gkd.li/i/13800235', //@LinearLayout > [text*="跳过"]
      ],
    },
  ],
});
