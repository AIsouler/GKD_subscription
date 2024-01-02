import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidutieba.davy',
  name: '贴吧一键签到大师',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '内部弹窗广告',
      activityIds: 'com.davy.commonlibrary.utils.DialogUtil',
      rules: [
        {
          matches: '[id="com.baidutieba.davy:id/exit"]',
          snapshotUrls: 'https://i.gkd.li/import/12504289',
        },
        {
          matches: '[id="com.baidutieba.davy:id/mimo_interstitial_close_img"]',
          snapshotUrls: 'https://i.gkd.li/import/12504291',
        },
      ],
    },
  ],
});
