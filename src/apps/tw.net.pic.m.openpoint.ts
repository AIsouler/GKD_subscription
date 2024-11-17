import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tw.net.pic.m.openpoint',
  name: 'OPENPOINT',
  groups: [
    {
      key: 1,
      name: '全屏广告-每日弹窗广告',
      desc: '勾选[今日不再顯示]-点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches: '[vid="iv_check_box"][checked=false]',
          exampleUrls: 'https://e.gkd.li/ec0eea76-8689-498d-8329-75bdb06c1e30',
          snapshotUrls: 'https://i.gkd.li/i/15806622',
        },
        {
          preKeys: [0],
          key: 1,
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches: '[vid="ivClose"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/ec0eea76-8689-498d-8329-75bdb06c1e30',
          snapshotUrls: 'https://i.gkd.li/i/15806622',
        },
      ],
    },
    {
      key: 2,
      name: '通知提示-i珍食公告弹窗',
      desc: '勾选[我已了解]-点击[確認]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.activity_ibon.IMapActivity',
          matches:
            '@[visibleToUser=true][text="atom-button-control-check-box-btn-check-box-n@3x"][checked=false] <<n [vid="web_view"]',
          exampleUrls: 'https://e.gkd.li/a36088c2-79a7-4167-bb77-7bd9be05696b',
          snapshotUrls: 'https://i.gkd.li/i/15806673',
        },
        {
          preKeys: [0],
          key: 1,
          fastQuery: true,
          activityIds: '.activity_ibon.IMapActivity',
          matches: '@[visibleToUser=true][text="確認"] <<n [vid="web_view"]',
          exampleUrls: 'https://e.gkd.li/a36088c2-79a7-4167-bb77-7bd9be05696b',
          snapshotUrls: 'https://i.gkd.li/i/15806673',
        },
      ],
    },
  ],
});
