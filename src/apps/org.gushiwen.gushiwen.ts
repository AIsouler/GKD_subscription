import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'org.gushiwen.gushiwen',
  name: '古诗文网',
  groups: [
    {
      key: 1,
      name: '应用内广告弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'org.gushiwen.gushiwen.HomeActivity',
          matches: 'ImageView - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12813618',
        },
        {
          preKeys: [0],
          key: 10,
          desc: '打赏页面-点击返回按钮',
          activityIds: 'local.z.androidshared.vip.RewardActivity',
          matches:
            '[id="org.gushiwen.gushiwen:id/btn_back"][desc="返回"] + [text="打赏我们"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12813638',
        },
      ],
    },
  ],
});
