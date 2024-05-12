import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.maxhom.weibu',
  name: '暮瑟',
  groups: [
    {
      key: 3,
      name: '分段广告-交友页面底部广告',
      activityIds: [
        'com.maxhom.weibu.tool.home.activity.NewMainActivity',
        'com.maxhom.weibu.WelcomeActivity',
      ],
      rules: [
        {
          key: 0,
          name: '类型1-点击右侧X',
          matches: [
            'TextView[text.length>0] < FrameLayout + FrameLayout > ImageView',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13377607',
            'https://i.gkd.li/i/13377810',
            'https://i.gkd.li/i/13728552',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '类型1-点击弹出窗口的X',
          matches:
            '[text.length>=2&&text.length<=6] <n FrameLayout < FrameLayout - FrameLayout > ImageView',
          snapshotUrls: ['https://i.gkd.li/i/13377611'],
        },
        {
          key: 2,
          name: '类型2-点击右侧X',
          matches: ['[id="com.maxhom.weibu:id/anythink_myoffer_banner_close"]'],
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
      quickFind: true,
      activityIds: [
        'com.maxhom.weibu.tool.home.activity.ToolBottleActivity',
        'com.maxhom.weibu.tool.home.activity.NewMainActivity',
      ],
      rules: [
        {
          matches: '[id="com.maxhom.weibu:id/ivClose"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13377649',
            'https://i.gkd.li/i/13457015',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '权限提示-定位权限',
      desc: '自动点击取消',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.maxhom.weibu.tool.home.activity.ToolBottleActivity',
        'com.maxhom.weibu.tool.msg.MyBottleActivity',
        'com.maxhom.weibu.tool.home.activity.NewMainActivity',
      ],
      rules: [
        {
          matches: '[text="去设置"] +n [text="取消"]',
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
