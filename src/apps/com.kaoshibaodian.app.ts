import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kaoshibaodian.app',
  name: '考试宝',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'ksbd.quiz.QuizActivity',
          matches:
            'FrameLayout[childCount=5] > @FrameLayout[childCount=1][text=null] > ImageView[childCount=0][text=null] <<n [vid="ad_layout"]',
          exampleUrls: 'https://e.gkd.li/c55cd473-21fa-4843-9778-89a3f5c8e073',
          snapshotUrls: 'https://i.gkd.li/i/16492043',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'ksbd.quiz.QuizActivity',
          matches: '[vid="close_iv"]',
          exampleUrls: 'https://e.gkd.li/c55cd473-21fa-4843-9778-89a3f5c8e073',
          snapshotUrls: 'https://i.gkd.li/i/16492043',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'ksbd.app.home.HomeActivity',
          matches:
            '[id="android:id/content"] >(3,4) FrameLayout[childCount>3] > FrameLayout[childCount=1] > ImageView[childCount=0][text=null]',
          exampleUrls: 'https://e.gkd.li/92252573-11c8-4ce8-a0df-4c7e94b7c101',
          snapshotUrls: 'https://i.gkd.li/i/16492018',
        },
      ],
    },
  ],
});
