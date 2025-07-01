import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.maxhom.weibu',
  name: '暮瑟',
  groups: [
    {
      key: 3,
      name: '局部广告-交友页面底部广告',
      activityIds: [
        'com.maxhom.weibu.tool.home.activity.NewMainActivity',
        'com.maxhom.weibu.WelcomeActivity',
      ],
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            '.tool.home.activity.NewMainActivity',
            '.WelcomeActivity',
          ],
          matches: [
            '@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="com.maxhom.weibu:id/flAd"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13377607',
            'https://i.gkd.li/i/13377810',
            'https://i.gkd.li/i/13728552',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.tool.home.activity.NewMainActivity',
          matches: '[id="com.maxhom.weibu:id/anythink_myoffer_banner_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13702305',
            'https://i.gkd.li/i/13702339',
            'https://i.gkd.li/i/13702345',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-漂流瓶页面提示弹窗',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            '.tool.home.activity.ToolBottleActivity',
            '.tool.home.activity.NewMainActivity',
          ],
          matches: '[id="com.maxhom.weibu:id/ivClose"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13377649',
            'https://i.gkd.li/i/13457015',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.tool.home.activity.NewMainActivity',
          matches:
            '@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] + FrameLayout >2 [text="立即下载"]',
          snapshotUrls: 'https://i.gkd.li/i/13377611',
        },
      ],
    },
    {
      key: 5,
      name: '权限提示-定位权限',
      desc: '自动点击取消',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.maxhom.weibu.tool.home.activity.ToolBottleActivity',
            'com.maxhom.weibu.tool.msg.MyBottleActivity',
            'com.maxhom.weibu.tool.home.activity.NewMainActivity',
          ],
          matches: '[text="去设置"] + [text="取消"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13377685',
            'https://i.gkd.li/i/13457033',
            'https://i.gkd.li/i/13457038',
          ],
        },
      ],
    },
  ],
});
