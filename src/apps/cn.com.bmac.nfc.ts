import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.bmac.nfc',
  name: '北京一卡通',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击[此广告不再提示]',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.activity.MainActivity',
          matches:
            '[vid="ad_content"] < * - [clickable=true][vid="not_prompt_again"]',
          exampleUrls: 'https://e.gkd.li/34995c89-e659-4a38-b4ed-9cb1514323b2',
          snapshotUrls: 'https://i.gkd.li/i/19718306',
        },
      ],
    },
  ],
});
