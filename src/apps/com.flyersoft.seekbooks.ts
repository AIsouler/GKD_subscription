import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.flyersoft.seekbooks',
  name: '搜书大师',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            '[id="com.flyersoft.seekbooks:id/splash_container1"] >5 [text^="跳过"][text.length<=3]',
          snapshotUrls: 'https://i.gkd.li/import/12857275',
        },
        {
          key: 1,
          matches:
            'FrameLayout > TextView[text=null] - View[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13797352',
        },
      ],
    },
  ],
});
