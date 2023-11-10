import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.flyersoft.seekbooks',
  name: '搜书大师',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchLauncher: true,
      quickFind: true,
      activityIds: ['com.flyersoft.seekbooks.ActivityMain'],
      rules: [
        {
          matches:
            '[id="com.flyersoft.seekbooks:id/splash_container1"] >5 [text^="跳过"][text.length<=3]',
          snapshotUrls: 'https://i.gkd.li/import/12857275',
        },
      ],
    },
  ],
});
