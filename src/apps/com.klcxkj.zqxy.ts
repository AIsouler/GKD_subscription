import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.klcxkj.zqxy',
  name: '趣智校园',
  groups: [
    {
      key: 1,
      name: '第三方 SDK 广告弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'com.anythink.basead.ui.ATPortraitTranslucentActivity',
          matches: '[id="com.klcxkj.zqxy:id/anythink_myoffer_btn_close_id"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12781415',
        },
        {
          key: 1,
          activityIds: 'com.klcxkj.zqxy.ui.main.MainActivity',
          matches:
            'ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12781461',
        },
      ],
    },
  ],
});
