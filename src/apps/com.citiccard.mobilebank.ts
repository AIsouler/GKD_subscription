import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.citiccard.mobilebank',
  name: '动卡空间',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.citiccard.mobilebankapp.WelcomeActivity'],
      rules: [
        {
          matches:
            '[id="com.citiccard.mobilebank:id/iv_popAdv"] + [id="com.citiccard.mobilebank:id/btn_skip"][text$="跳过"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12684908'],
        },
      ],
    },
  ],
});
