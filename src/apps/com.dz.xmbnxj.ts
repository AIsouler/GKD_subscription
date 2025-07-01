import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dz.xmbnxj',
  name: '小卖部逆袭记',
  groups: [
    {
      key: 1,
      name: '局部广告-底部卡片广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.lynx.boot.LynxActivity',
          matches: '[id="com.dz.xmbnxj:id/mix_img_close"]',
          exampleUrls:
            'https://m.gkd.li/99116490/40d3c3c9-9443-4c71-9a98-69efa38f8bfd',
          snapshotUrls: 'https://i.gkd.li/i/13399232',
        },
      ],
    },
  ],
});
