import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.gkid.crazyrope',
  name: '天天跳绳',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12916417',
        },
        {
          matches: '[text^="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/13028151',
            'https://i.gkd.li/import/13195567',
            'https://gkd-kit.gitee.io/import/12985488',
          ],
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
