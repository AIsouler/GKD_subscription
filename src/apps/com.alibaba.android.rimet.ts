import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.alibaba.android.rimet',
  name: '钉钉',
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
          key: 0,
          matches:
            '[id="com.alibaba.android.rimet:id/btn_check_detail"][text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12506211',
        },
        {
          key: 1,
          matches:
            '[id="com.alibaba.android.rimet:id/splash_advertise_pass_text"]',
          snapshotUrls: 'https://i.gkd.li/import/12837220',
        },
      ],
    },
    {
      enable: false,
      key: 1,
      name: '消息列表上方广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            'ImageView < FrameLayout + FrameLayout > [id="com.alibaba.android.rimet:id/icft_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13325125',
          action: 'clickCenter',
        },
      ],
    },
    {
      enable: false,
      key: 2,
      name: '文件即将过期提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            '@FrameLayout[id="com.alibaba.android.rimet:id/layout_close"] -2 TextView[text="文件即将过期请备份"]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/import/13325125',
        },
      ],
    },
  ],
});
