import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuaishou.nebula',
  name: '快手极速版',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches: '[vid="splash_skip_text"]',
          exampleUrls: 'https://e.gkd.li/5d393b9b-c327-4429-9759-8c18a097453a',
          snapshotUrls: 'https://i.gkd.li/i/17631261',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-朋友推荐弹窗',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
          matches:
            '[vid="popup_view" || vid="content_wrapper"] > [vid="close_btn"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14310639',
            'https://i.gkd.li/i/15061832',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-红包弹窗',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
          matches:
            '@ImageView[clickable=true] <(2,3) ViewGroup >(1,4) [text*="红包"]',
          exampleUrls:
            'https://m.gkd.li/101449500/f7bbd1db-f519-4ff9-96cb-4cb5b2f483a2',
          snapshotUrls: [
            'https://i.gkd.li/i/14879912',
            'https://i.gkd.li/i/15061662',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
          matches: '[vid="close_icon"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/12059549-21c2-47b7-9acf-ec221cc14f25',
          snapshotUrls: 'https://i.gkd.li/i/15747381',
        },
      ],
    },
    {
      key: 5,
      name: '分段广告-悬浮广告',
      fastQuery: true,
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="close_pendant"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/8f56e57f-b2d7-457c-8376-6351568ec14a',
          snapshotUrls: 'https://i.gkd.li/i/23431963',
        },
        {
          preKeys: [0],
          matches: '[text="确定"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/89294dbb-4398-4561-91b7-4943ec7c98c7',
          snapshotUrls: 'https://i.gkd.li/i/23431964',
        },
      ],
    },
    {
      key: 6,
      name: '评价提示',
      desc: 'x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
          matches: '@[vid="close"][clickable=true] +2 * > [text*="给个好评吧"]',
          snapshotUrls: 'https://i.gkd.li/i/22851896',
        },
      ],
    },
  ],
});
