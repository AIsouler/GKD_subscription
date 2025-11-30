import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smk',
  name: '杭州市民卡',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.smk.activity.MainActivity',
            'com.smk.activity.LaunchActivity',
            'com.tianmu.biz.activity.InterstitialActivity',
          ],
          matches:
            '[id="com.smk:id/iv_close_ad" || vid="tianmu_widget_iv_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13402584',
            'https://i.gkd.li/i/13425013',
            'https://i.gkd.li/i/23567834',
          ],
        },
      ],
    },
  ],
});
