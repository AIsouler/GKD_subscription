import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'me.zhouzhuo810.zznote',
  name: '小周便签',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches: '@[vid^="btn_next_"] - [vid="native_ad_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12798528',
            'https://i.gkd.li/i/14662294',
          ],
        },
        {
          key: 1,
          matches: '@LinearLayout > [text*="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/13800235',
        },
      ],
    },
  ],
});
