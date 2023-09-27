import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.article.news',
  name: '今日头条',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.ss.android.article.news.activity.MainActivity'],
      rules: [
        {
          matches:
            '[id="android:id/tabhost"] >(3) [text="跳过广告"][clickable=true]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12684954'],
        },
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: ['com.ss.android.mine.BaseSettingActivity'],
      rules: [
        {
          matches: '[text="升级版本"] + [desc="关闭"][clickable=true]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12685000'],
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
      ],
    },
    {
      enable: false,
      key: 11,
      name: '竖屏视频广告',
      desc: '点击右上角[更多]图标按钮,出现菜单,点击不感兴趣',
      activityIds: 'com.ss.android.ugc.detail.activity.TikTokActivity',
      rules: [
        {
          key: 0,
          name: '点击右上角[更多]图标按钮',
          matches:
            '@ImageView[clickable=true][desc="更多"] <3 RelativeLayout -2 RelativeLayout >4 LynxFlattenUI[text="头条优惠券无门槛全平台通用"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12679280',
            'https://gkd-kit.gitee.io/import/12733282',
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
          preKeys: [0, 1],
          name: '点击不感兴趣',
          matches:
            '@LinearLayout[clickable=true] > RelativeLayout + TextView[text="不感兴趣"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12679277',
        },
      ],
    },
    {
      enable: false,
      key: 12,
      name: '信息流广告',
      desc: '点击右上角x按钮,点击不感兴趣',
      activityIds: 'com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity',
      rules: [
        {
          name: '点击右上角x按钮',
          key: 0,
          matches:
            'FlattenUIText[text^="广告"][text.length=4] -n UIView[desc="不感兴趣 按钮"][clickable=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12733098',
        },
        {
          name: '点击不感兴趣',
          preKeys: 0,
          matches:
            '@ViewGroup[clickable=true] > ImageView + TextView[text="不感兴趣"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12733152',
        },
      ],
    },
  ],
});
