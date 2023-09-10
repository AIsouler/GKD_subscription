import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hupu.games',
  name: '虎扑',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '开屏广告,任意界面切回APP广告',
      rules:
        '[id="com.byted.pangle:id/tt_splash_skip_btn"||id="com.hupu.games:id/tv_time"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12509060',
        'https://gkd-kit.gitee.io/import/12510962',
        'https://gkd-kit.gitee.io/import/12567546',
      ],
    },
    {
      key: 1,
      activityIds: 'com.hupu.games.main.MainActivity',
      name: '推荐流广告',
      desc: '点击卡片右上角广告文字,出现广告反馈,点击屏蔽该广告',
      rules: [
        {
          activityIds: [
            'com.google.android.material.bottomsheet.BottomSheetDialog',
            'com.hupu.games.main.MainActivity',
          ],
          matches: '[id="com.hupu.games:id/tv_title"][text="屏蔽该广告"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12511010',
            'https://gkd-kit.gitee.io/import/12534848',
          ],
        },
        {
          matches: '[id="com.hupu.games:id/tv_tag"][text="广告"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12511005',
        },
      ],
    },
  ],
});
