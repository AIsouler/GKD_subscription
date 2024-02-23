import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.article.lite',
  name: '头条搜索极速版',
  groups: [
    {
      enable: false,
      key: 10,
      name: '全屏广告-首页-红包弹窗',
      activityIds: 'com.ss.android.article.lite.activity.SplashActivity',
      rules: '@[desc="关闭"] + [text$="现金红包"]',
      snapshotUrls: 'https://i.gkd.li/i/12705414',
    },
    {
      key: 11,
      name: '局部广告-首页-右侧悬浮广告',
      activityIds: 'com.ss.android.article.lite.activity.SplashActivity',
      rules:
        'FrameLayout[id!=null] > @ImageView[id!=null][clickable=true] + ImageView[id!=null]',
      snapshotUrls: 'https://i.gkd.li/i/12705452',
    },
    {
      enable: false,
      key: 12,
      name: '功能类-首页-你可能感兴趣的人',
      activityIds: 'com.ss.android.article.lite.activity.SplashActivity',
      rules: '[text="你可能感兴趣的人"] + [desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/i/12705427',
    },
    {
      enable: false,
      key: 20,
      name: '功能类-任务页面-签到弹窗',
      activityIds: 'com.ss.android.article.lite.activity.SplashActivity',
      rules: [
        {
          matches:
            'UIView[clickable=false] + LynxFlattenUI[clickable=true][visibleToUser=true]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/i/12705439',
        },
      ],
    },
    {
      enable: false,
      key: 21,
      name: '局部广告-任务页面-右侧悬浮红包',
      activityIds: 'com.ss.android.article.lite.activity.SplashActivity',
      rules: 'UIScrollView + UIView + UISvg',
      snapshotUrls: 'https://i.gkd.li/i/12705447',
    },
    {
      enable: false,
      key: 22,
      name: '全屏广告-任务页面-答题弹窗',
      activityIds: 'com.ss.android.article.lite.activity.SplashActivity',
      rules: [
        {
          matches:
            '[text^="答对"][text$="金币"] + FlattenUIImage[clickable=true]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/i/12705456',
        },
      ],
    },
    {
      enable: false,
      key: 30,
      name: '全屏广告-搜索页面-搜索得金币弹窗',
      activityIds: 'com.android.bytedance.search.SearchActivity',
      rules: [
        {
          matches: '[text^="搜索"][text$="金币"] + LynxFlattenUI + UISvg',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/i/12705468',
        },
      ],
    },
  ],
});
