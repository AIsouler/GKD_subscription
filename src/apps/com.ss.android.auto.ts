import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.auto',
  name: '懂车帝',
  groups: [
    {
      key: 1,
      name: '分段广告-首页推荐卡片广告',
      desc: '需二次点击关闭原因',
      fastQuery: true,
      activityIds: [
        'com.ss.android.auto.activity.SplashActivity',
        'com.ss.android.auto.policy.AutoPrivacyActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击关闭',
          matches:
            'TextView[text.length=1][id=null][clickable=false] < @FrameLayout[clickable=true][id!=null] - LinearLayout > [text="广告"]',
          // 貌似快照存在延迟导致屏幕与节点不对应
          snapshotUrls: [
            'https://i.gkd.li/i/12660816',
            'https://i.gkd.li/i/13959610',
          ],
        },
        {
          // 不与旧版本合并，尽量使用[clickable=true]，保证速度避免误触
          preKeys: [0],
          name: '点击"不感兴趣"1',
          matches: '@ViewGroup[clickable=true] TextView[text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13538627',
        },
        {
          preKeys: [0],
          name: '点击"不感兴趣"2',
          matches: '[text="不感兴趣"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12711589',
            'https://i.gkd.li/i/13959613',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.SplashActivity',
          matches:
            '@TextView[text="以后再说"] - FrameLayout >2 TextView[text$="升级"]',
          snapshotUrls: 'https://i.gkd.li/i/13534445',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-右下角悬浮窗',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: [
            'com.ss.android.auto.activity.SplashActivity',
            'com.ss.android.auto.activity.ConcernDetailActivity',
          ],
          matches:
            'FrameLayout > RelativeLayout[childCount=2] > RelativeLayout + ImageView[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12798338',
            'https://i.gkd.li/i/13535531',
            'https://i.gkd.li/i/13535933',
            'https://i.gkd.li/i/13535932',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-文章底部卡片广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.ss.android.article.base.feature.detail2.view.NewDetailActivity',
          matches:
            'FrameLayout > RelativeLayout > @ImageView[clickable=true] + [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12811597',
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-评论区信息流广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          activityIds: [
            'com.ss.android.article.base.feature.detail2.view.NewDetailActivity',
            'com.ss.android.auto.ugc.video.activity.UgcLongPostActivity',
            'com.ss.android.auto.ugc.video.activity.UgcNewDetailActivity',
          ],
          matches: '@ImageView[clickable=true] - LinearLayout > [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12811459',
            'https://i.gkd.li/i/12825865',
            'https://i.gkd.li/i/12900666',
            'https://i.gkd.li/i/14321293',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '权限提示-通知权限',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          activityIds: [
            '.activity.SplashActivity',
            'com.bytedance.im.auto.conversation.activity.ConversationListActivity',
          ],
          matches: 'TextView[text*="推送通知"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12840664',
            'https://i.gkd.li/i/14060897',
            'https://i.gkd.li/i/14546563',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-选车页卡片广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ss.android.auto.activity.ConcernDetailActivity',
          matches: '@FrameLayout[clickable=true][id!=null] -2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13686928',
        },
      ],
    },
    {
      key: 8,
      name: '局部广告-车型页面右下角直播悬浮窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ss.android.auto.activity.ConcernDetailActivity',
          matches: 'FrameLayout[childCount=8] > TextView[text=""]',
          snapshotUrls: 'https://i.gkd.li/i/14034740',
        },
      ],
    },
    {
      key: 9,
      name: '评价提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          activityIds: '.activity.SplashActivity',
          matches: '[text="去评价"]',
          snapshotUrls: 'https://i.gkd.li/i/14810042',
        },
      ],
    },
  ],
});
