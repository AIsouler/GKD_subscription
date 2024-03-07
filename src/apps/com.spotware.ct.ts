import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.spotware.ct',
  name: 'cTrader',
  groups: [
    {
      key: 1,
      name: '功能类-询问是否是美国居民弹窗',
      desc: '点击[我不是美国居民]-点击[确认]',
      quickFind: true,
      activityIds: 'mobile.droid.ctrader.views.main.MainActivity',
      rules: [
        {
          key: 0,
          name: '点击[我不是美国居民]',
          matches: '[text="我不是美国居民"]',
          exampleUrls:
            'https://m.gkd.li/57941037/959b6c00-0d43-46d4-83eb-056326f036a5',
          snapshotUrls: 'https://i.gkd.li/i/14495502',
        },
        {
          key: 1,
          preKeys: [0],
          name: '点击[确认]',
          matches: '[text="确认"]',
          exampleUrls:
            'https://m.gkd.li/57941037/8adae91e-019d-44eb-8820-b3d560a2b66d',
          snapshotUrls: 'https://i.gkd.li/i/14495496',
        },
      ],
    },
  ],
});
