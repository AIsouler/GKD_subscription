import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.movie.store',
  name: '影视仓',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片式广告',
      rules: [
        {
          key: 0,
          name: '快手广告',
          activityIds:
            'com.github.tvbox.osc.ui.activity.mobile.MobileHomeActivity',
          matches: '[text="广告"] +2 View > View + TextView',
          snapshotUrls: 'https://i.gkd.li/i/13476107',
        },
      ],
    },
  ],
});
