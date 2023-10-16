import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.gkid.crazyrope',
  name: '天天跳绳',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      quickFind: true,
      activityIds: 'com.gkid.crazyrope.ui.splash.StartPageActivity',
      rules: [
        {
          matches: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12916417',
        },
      ],
    },
    {
      key: 1,
      name: '会员提示',
      desc: '点击不需要',
      quickFind: true,
      activityIds: 'com.gkid.crazyrope.ui.member.MemberDiscountsActivity',
      rules: [
        {
          matches: '[id="com.gkid.crazyrope:id/btn_close"][text="暂不需要"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12916419',
        },
      ],
    },
  ],
});
