import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.auto',
  name: '懂车帝',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@FrameLayout[clickable=true] > [text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/12605327',
    },
    {
      enable: false,
      key: 1,
      name: '首页推荐卡片广告',
      desc: '需二次点击关闭原因',
      quickFind: true,
      activityIds: 'com.ss.android.auto.activity.SplashActivity',
      rules: [
        {
          key: 0,
          name: '点击【x】',
          matches:
            'TextView[text.length=1][id=null][clickable=false] < @FrameLayout[clickable=true][id!=null] - LinearLayout > [text="广告"]',
          // 貌似快照存在延迟导致屏幕与节点不对应
          snapshotUrls: 'https://i.gkd.li/import/12660816',
        },
        {
          preKeys: 1,
          name: '点击【不感兴趣】',
          matches:
            '[text$="精准屏蔽"] + [text="不感兴趣"][id!=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12711589',
        },
      ],
    },
    {
      key: 2,
      name: '升级弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.ss.android.auto.activity.SplashActivity',
      rules:
        '@TextView[text="以后再说"] - FrameLayout >2 TextView[text$="升级"]',
      snapshotUrls: 'https://i.gkd.li/import/13534445',
    },
    {
      key: 3,
      name: '右下角悬浮窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: [
        'com.ss.android.auto.activity.SplashActivity',
        'com.ss.android.auto.activity.ConcernDetailActivity',
      ],
      rules:
        'FrameLayout > RelativeLayout[childCount=2] > RelativeLayout + ImageView[clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/12798338',
        'https://i.gkd.li/import/13535531',
        'https://i.gkd.li/import/13535933',
        'https://i.gkd.li/import/13535932',
      ],
    },
    {
      key: 4,
      name: '文章底部广告',
      quickFind: true,
      activityIds:
        'com.ss.android.article.base.feature.detail2.view.NewDetailActivity',
      rules:
        '@ImageView[clickable=true] <2 RelativeLayout[childCount=4][id!=null] > TextView[text="广告"][id!=null]',
      snapshotUrls: 'https://i.gkd.li/import/12811597',
    },
    {
      key: 5,
      name: '评论区广告',
      quickFind: true,
      activityIds: [
        'com.ss.android.article.base.feature.detail2.view.NewDetailActivity',
        'com.ss.android.auto.ugc.video.activity.UgcLongPostActivity',
        'com.ss.android.auto.ugc.video.activity.UgcNewDetailActivity',
      ],
      rules:
        'RelativeLayout[childCount=5][id=null] > @ImageView[clickable=true][id!=null] - LinearLayout[childCount=2][id!=null] > TextView[text="广告"][id!=null]',
      snapshotUrls: [
        'https://i.gkd.li/import/12811459',
        'https://i.gkd.li/import/12825865',
        'https://i.gkd.li/import/12900666',
      ],
    },
    {
      key: 6,
      name: '请求推送通知弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.ss.android.auto.activity.SplashActivity',
      rules:
        '@TextView[clickable=true && text.length =1] + [text ^="打开推送通知"]',
      snapshotUrls: 'https://i.gkd.li/import/12840664',
    },
  ],
});
