import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.gkid.crazyrope',
  name: '天天跳绳',
  groups: [
    {
      key: 1,
      name: '全屏广告-会员提示',
      desc: '点击不需要',
      quickFind: true,
      activityIds: 'com.gkid.crazyrope.ui.member.MemberDiscountsActivity',
      rules: [
        {
          matches: '[id="com.gkid.crazyrope:id/btn_close"][text="暂不需要"]',
          snapshotUrls: 'https://i.gkd.li/import/12916419',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-浮窗广告',
      desc: '二步确认',
      quickFind: true,
      activityIds: 'com.gkid.crazyrope.ui.drillcommon.DrillActivity',
      rules: [
        '[id="com.gkid.crazyrope:id/iv_close"]',
        '[id="com.gkid.crazyrope:id/tv_close"][text="关闭广告"]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/import/13262845',
        'https://i.gkd.li/import/13262844',
      ],
    },
  ],
});
