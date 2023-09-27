import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jdd.motorfans',
  name: '摩托范',
  groups: [
    {
      key: 1,
      name: 'APP内弹窗广告',
      activityIds: ['com.jdd.motorfans.MTMainActivity'],
      rules: [
        {
          matches:
            'RelativeLayout > ImageView[id="com.jdd.motorfans:id/iv_close"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12733646',
          exampleUrls:
            'https://user-images.githubusercontent.com/44717382/270852019-b0296eaa-a378-49b3-877b-acefca2a7d58.gif',
        },
      ],
    },
  ],
});
