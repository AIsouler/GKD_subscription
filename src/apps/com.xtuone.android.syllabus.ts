import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xtuone.android.syllabus',
  name: '超级课程表',
  groups: [
    {
      key: 1,
      name: '局部广告-首页卡片广告',
      rules: [
        {
          activityIds: 'com.xtuone.android.friday.MainFragmentActivity',
          matches:
            '[id="com.xtuone.android.syllabus:id/treehole_banner_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12840733',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-课程表界面广告',
      rules: [
        {
          activityIds: 'com.xtuone.android.friday.MainFragmentActivity',
          matches: '[id="com.xtuone.android.syllabus:id/imgv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12999642',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xtuone.android.friday.MainFragmentActivity',
          matches: '[id="com.xtuone.android.syllabus:id/dialog_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13166501',
        },
      ],
    },
    {
      key: 4,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xtuone.android.friday.UpdateActivity',
          matches: '@[vid="update_cancel"] + [vid="go_to_update"]',
          snapshotUrls: 'https://i.gkd.li/i/14292875',
        },
      ],
    },
  ],
});
