import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.article.news',
  name: '今日头条',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="升级版本"] +n [desc="关闭"][clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/12685000',
        'https://i.gkd.li/import/12840104',
        'https://i.gkd.li/import/13316081',
      ],
    },
    {
      key: 2,
      name: '局部广告-浮窗广告',
      rules: [
        {
          key: 0,
          name: '首页-浮窗广告',
          activityIds: 'com.ss.android.article.news.activity.MainActivity',
          matches:
            'FrameLayout > FrameLayout > FrameLayout[childCount=2] > @ImageView + ImageView[clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13762123',
        },
        {
          key: 1,
          name: '视频页-浮窗广告',
          activityIds: 'com.ss.android.ugc.detail.activity.TikTokActivity',
          matches:
            'FrameLayout > FrameLayout > FrameLayout[childCount=2] > ImageView + ImageView[clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13761236',
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '通知提示-请求通知权限弹窗',
      activityIds: ['com.ss.android.article.news.activity.MainActivity'],
      rules: [
        {
          matches: '[text^="开启通知"] + LinearLayout > [text="暂不开启"]',
          snapshotUrls: ['https://i.gkd.li/import/12706699'],
        },
        {
          matches:
            '[text^="开启通知"] < LinearLayout +2 ImageView[desc="关闭"]',
          snapshotUrls: ['https://i.gkd.li/import/12840217'],
        },
      ],
    },
    {
      enable: false,
      key: 11,
      name: '全屏广告-竖屏视频广告',
      desc: '点击右上角[更多]图标按钮,点击不感兴趣',
      activityIds: 'com.ss.android.ugc.detail.activity.TikTokActivity',
      rules: [
        {
          key: -1,
          preKeys: 0,
          actionCd: 35000, //APP更新后点击不感兴趣不会跳过当前视频了，所以需要冷却一下等下一次重新跳过广告视频
          name: '点击不感兴趣',
          matches:
            '@LinearLayout[clickable=true] > RelativeLayout + TextView[text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/12679277',
        },
        {
          key: 0,
          name: '点击右上角[更多]图标按钮',
          matches: 'ImageView[clickable=true][desc="更多"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12679280',
            'https://i.gkd.li/import/12733282',
            'https://i.gkd.li/import/12763251',
            'https://i.gkd.li/import/12763252',
            'https://i.gkd.li/import/12733281',
            'https://i.gkd.li/import/13185633',
            'https://i.gkd.li/import/13186082',
            'https://i.gkd.li/import/13930050',
          ],
        },
      ],
    },
    {
      enable: false,
      key: 12,
      name: '分段广告-信息流广告',
      desc: '点击右上角x按钮,点击不感兴趣',
      rules: [
        {
          name: '点击右上角x按钮',
          key: 0,
          activityIds: [
            'com.ss.android.article.news.activity.MainActivity',
            'com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity',
          ],
          matches: 'UIView[text^="不感兴趣"][visibleToUser=true]',
          action: 'clickCenter',
          snapshotUrls: [
            'https://i.gkd.li/import/12733098',
            'https://i.gkd.li/import/12755264',
            'https://i.gkd.li/import/12836272',
            'https://i.gkd.li/import/12840162',
            'https://i.gkd.li/import/13093576',
            'https://i.gkd.li/import/12733098',
          ],
          exampleUrls: [
            'https://user-images.githubusercontent.com/44717382/273436460-cf007525-81ce-418b-ac05-3bfd75a627fe.gif', //这是 https://i.gkd.li/import/12840162
          ],
        },
        {
          name: '点击不感兴趣',
          preKeys: 0,
          key: 1,
          activityIds: [
            'com.ss.android.article.news.activity.MainActivity',
            'com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity',
          ],
          matches:
            '@ViewGroup[clickable=true] > ImageView + TextView[text="不感兴趣"]',
          action: 'clickCenter',
          snapshotUrls: [
            'https://i.gkd.li/import/12733152',
            'https://i.gkd.li/import/12755265',
          ],
        },
      ],
    },
    {
      enable: false,
      key: 13,
      name: '局部广告-底部话题推荐弹窗',
      activityIds: ['com.ss.android.article.news.activity.MainActivity'],
      rules: [
        {
          name: '话题谈论',
          matches:
            'FlattenUIText[text="参与讨论"] + FlattenUIImage[clickable=true]',
          snapshotUrls: ['https://i.gkd.li/import/12706699'],
        },
      ],
    },
    {
      enable: false,
      key: 14,
      name: '功能类-自动观看广告视频',
      desc: '自动观看广告并等待30s后关闭',
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '点击【看视频】',
          activityIds: 'com.ss.android.article.news.activity.MainActivity',
          matches:
            '[id="com.bytedance.novel.api:id/component_ad_dialog_button_video"]',
          snapshotUrls: 'https://i.gkd.li/import/13402468',
        },
        {
          name: '等待30s点击【关闭】',
          actionDelay: 30000,
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches: 'UIText[text="广告"] +n UIText[text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/13402480',
        },
      ],
    },
    {
      key: 15,
      quickFind: true,
      name: '局部广告-底部热榜弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.ss.android.article.news.activity.MainActivity',
          matches: 'FrameLayout[childCount=8] > FlattenUIImage[index=7]',
          snapshotUrls: 'https://i.gkd.li/import/13828331',
        },
      ],
    },
  ],
});
