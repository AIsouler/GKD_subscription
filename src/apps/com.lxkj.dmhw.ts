import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lxkj.dmhw',
  name: '呆萌价',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          quickFind: true,
          position: {
            left: 'width * 0.8981',
            top: 'width * 0.1629',
          },
          matches: '[id="com.lxkj.dmhw:id/animation_view"]',
          exampleUrls:
            'https://m.gkd.li/57941037/c523fe10-484f-4bdb-b331-51745e494af1',
          snapshotUrls: 'https://i.gkd.li/i/13246178',
        },
      ],
    },
  ],
});
