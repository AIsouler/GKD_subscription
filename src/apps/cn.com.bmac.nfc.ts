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
    {
      key: 2,
      name: '功能类-跳过协议',
      desc: '点击[同意]',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.activity.MainActivity',
          matches:
            '@[vid="Agree_and_continue"] <<2 * - [vid="layout_title"] >2 [vid="tv_privacy_content"]',
          exampleUrls: 'https://e.gkd.li/9c0ec080-3156-4276-b556-47cf20e08150',
          snapshotUrls: 'https://i.gkd.li/i/21133268',
        },
      ],
    },
  ],
});
