import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.wework',
  name: '企业微信',
  groups: [
    {
      key: 1,
      name: '功能类-自动抢红包',
      desc: '自己发的红包不抢',
      quickFind: true,
      rules: [
        {
          key: 0,
          activityIds:
            'com.tencent.wework.msg.controller.ExternalContactMessageListActivity',
          matches:
            'RelativeLayout[childCount=2] > ImageView + * @RelativeLayout[childCount=4] > LinearLayout[index=1] > LinearLayout[childCount=1] > [text="恭喜发财，大吉大利"]',
          exampleUrls:
            'https://m.gkd.li/57941037/64bdd899-9a30-4816-bafc-a9e2a0d09ec6',
          snapshotUrls: [
            'https://i.gkd.li/import/14151095',
            'https://i.gkd.li/import/14151131', // 已领取的红包、自己的红包
          ],
        },
        {
          preKeys: 0,
          key: 1,
          activityIds:
            'com.tencent.wework.enterprise.redenvelopes.controller.RedEnvelopeCollectorActivity',
          matches: '[id="com.tencent.wework:id/ivo"]',
          exampleUrls:
            'https://m.gkd.li/57941037/52525cdb-0746-483c-b1ba-2282f3a8b8ed',
          snapshotUrls: 'https://i.gkd.li/import/14151108',
        },
        {
          preKeys: [0, 1],
          key: 2,
          activityIds:
            'com.tencent.wework.enterprise.redenvelopes.controller.RedEnvelopeDetailActivity',
          matches: '[id="com.tencent.wework:id/lx9"]',
          exampleUrls:
            'https://m.gkd.li/57941037/2a69cf93-1d10-48c4-8456-663197c6feca',
          snapshotUrls: 'https://i.gkd.li/import/14151120',
        },
      ],
    },
  ],
});
