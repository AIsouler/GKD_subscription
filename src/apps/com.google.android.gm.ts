import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.gm',
  name: 'Gmail',
  groups: [
    {
      key: 2,
      name: '分段广告-信息流广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches:
            '[id="com.google.android.gm:id/basic_ad_teaser_info_icon" || id="com.google.android.gm:id/button_chip_ad_teaser_info_icon"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13255698',
            'https://i.gkd.li/i/13255698',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches:
            'Button[visibleToUser=true][text="屏蔽此广告" || text^="Block" || desc="屏蔽"] <<n [vid="my_ad_center_dialog"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13255700',
            'https://i.gkd.li/i/13724271',
            'https://i.gkd.li/i/20585351',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches:
            'Button[visibleToUser=true][text="继续" || text="Continue"] <<n [id="com.google.android.gm:id/my_ad_center_dialog"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13255701',
            'https://i.gkd.li/i/13724287',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: '[id="com.google.android.gm:id/my_ad_center_close_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/13263279',
        },
      ],
    },
  ],
});
