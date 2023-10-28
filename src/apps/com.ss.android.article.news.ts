import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.article.news',
  name: '今日头条',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchLauncher: true,
      activityIds: [
        'com.ss.android.article.news.activity.MainActivity',
        'com.bytedance.ugc.UgcDetailInfoActivity',
        'com.ss.android.splashad.splash.view.SplashAdActivity',
      ],
      rules: [
        {
          matches: '[childCount=1] > [text="跳过广告"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12684954',
            'https://gkd-kit.gitee.io/import/12754759',
            'https://gkd-kit.gitee.io/import/12840189',
            'https://gkd-kit.gitee.io/import/13174224',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      matchLauncher: true,
      activityIds: ['com.ss.android.mine.BaseSettingActivity'],
      rules: [
        {
          matches: '[text="升级版本"] +n [desc="关闭"][clickable=true]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12685000',
            'https://gkd-kit.gitee.io/import/12840104',
          ],
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '请求通知权限弹窗',
      activityIds: ['com.ss.android.article.news.activity.MainActivity'],
      rules: [
        {
          matches: '[text^="开启通知"] + LinearLayout > [text="暂不开启"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12706699'],
        },
        {
          matches:
            '[text^="开启通知"] < LinearLayout +2 ImageView[desc="关闭"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12840217'],
        },
      ],
    },
    {
      enable: false,
      key: 11,
      name: '竖屏视频广告',
      desc: '检测到广告时,点击右上角[更多]图标按钮,出现菜单,点击不感兴趣',
      activityIds: 'com.ss.android.ugc.detail.activity.TikTokActivity',
      rules: [
        {
          key: -1,
          preKeys: [0, 1, 2, 3],
          name: '点击不感兴趣',
          matches:
            '@LinearLayout[clickable=true] > RelativeLayout + TextView[text="不感兴趣"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12679277',
        },
        {
          key: 0,
          name: '点击右上角[更多]图标按钮',
          matches:
            '@ImageView[clickable=true][desc="更多"] <n RelativeLayout -2 RelativeLayout >4 LynxFlattenUI[text="头条优惠券无门槛全平台通用"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12679280',
            'https://gkd-kit.gitee.io/import/12733282',
            'https://gkd-kit.gitee.io/import/12763251',
            'https://gkd-kit.gitee.io/import/12763252',
          ],
        },
        {
          key: 1,
          name: '点击右上角[更多]图标按钮-抖音直播',
          matches:
            '@ImageView[clickable=true][desc="更多"] <4 RelativeLayout -2 RelativeLayout >4 LinearLayout[childCount=3] > ScrollView[childCount=1] > TextView[text$="广告"][clickable=true]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12733281'],
        },
        {
          key: 2,
          name: '第二种广告界面；点击右上角[更多]图标按钮',
          matches:
            '@ImageView[clickable=true][desc="更多"] <n RelativeLayout -2 RelativeLayout >n TextView[text$="广告"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/13185633'],
        },
        {
          key: 3,
          name: '第三种广告界面；点击右上角[更多]图标按钮',
          matches:
            '@ImageView[clickable=true][desc="更多"] <n RelativeLayout +2 LinearLayout > TextView[text$="广告"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/13186082'],
        },
      ],
    },
    {
      enable: false,
      key: 12,
      name: '信息流广告',
      desc: '点击右上角x按钮,点击不感兴趣',
      activityIds: [
        'com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity',
        'com.ss.android.article.news.activity.MainActivity',
      ],
      rules: [
        {
          name: '点击右上角x按钮',
          key: 0,
          matches:
            '[text^="广告"|| text$="广告" ||text^="来自"] <n FrameLayout > UIView[text^="不感兴趣"]',
          action: 'clickCenter',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12733098',
            'https://gkd-kit.gitee.io/import/12755264',
            'https://gkd-kit.gitee.io/import/12836272',
            'https://gkd-kit.gitee.io/import/12840162',
            'https://gkd-kit.gitee.io/import/13093576',
          ],
          exampleUrls: [
            'https://user-images.githubusercontent.com/44717382/273436460-cf007525-81ce-418b-ac05-3bfd75a627fe.gif', //这是 https://gkd-kit.gitee.io/import/12840162
          ],
        },
        {
          name: '点击不感兴趣',
          preKeys: 0,
          matches:
            '@ViewGroup[clickable=true] > ImageView + TextView[text="不感兴趣"]',
          action: 'clickCenter',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12733152',
            'https://gkd-kit.gitee.io/import/12755265',
          ],
        },
      ],
    },
  ],
});
