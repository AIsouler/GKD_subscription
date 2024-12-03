import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gkid.crazyrope',
  name: '天天跳绳',
  groups: [
    {
      key: 1,
      name: '全屏广告-会员提示',
      desc: '点击不需要',
      fastQuery: true,
      activityIds: 'com.gkid.crazyrope.ui.member.MemberDiscountsActivity',
      rules: [
        {
          matches: '[id="com.gkid.crazyrope:id/btn_close"][text="暂不需要"]',
          snapshotUrls: 'https://i.gkd.li/i/12916419',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-浮窗广告',
      desc: '点击关闭-点击关闭广告',
      fastQuery: true,
      activityIds: '.ui.drillcommon.DrillActivity',
      rules: [
        {
          key: 0,
          matches: '[id="com.gkid.crazyrope:id/iv_close"]',
          exampleUrls: 'https://e.gkd.li/398c08eb-ebfb-4cf6-9349-0b0ad4b575c9',
          snapshotUrls: 'https://i.gkd.li/i/13262845',
        },
        {
          preKeys: [0],
          matches: '[text="关闭广告"]',
          exampleUrls: 'https://e.gkd.li/3d27d844-b552-4a0c-800b-3dc5790fb8c0',
          snapshotUrls: 'https://i.gkd.li/i/13262844',
        },
      ],
    },
  ],
});
