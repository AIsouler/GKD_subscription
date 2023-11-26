import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.maxhom.weibu',
  name: '暮瑟',
  groups: [
    {
      key: 3,
      name: '交友-底部广告',
      activityIds: [
        'com.maxhom.weibu.tool.home.activity.NewMainActivity',
        'com.maxhom.weibu.WelcomeActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击右侧X',
          matches: ['ImageView - FrameLayout > ImageView'],
          snapshotUrls: [
            'https://i.gkd.li/import/13377607',
            'https://i.gkd.li/import/13377810',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击弹出窗口的X',
          matches:
            '[text.length>=2&&text.length<=6] <n FrameLayout < FrameLayout - FrameLayout > ImageView',
          snapshotUrls: ['https://i.gkd.li/import/13377611'],
        },
      ],
    },
    {
      key: 4,
      name: '漂流瓶-提示弹窗',
      quickFind: true,
      activityIds: [
        'com.maxhom.weibu.tool.home.activity.ToolBottleActivity',
        'com.maxhom.weibu.tool.home.activity.NewMainActivity',
      ],
      rules: [
        {
          matches: '[id="com.maxhom.weibu:id/ivClose"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13377649',
            'https://i.gkd.li/import/13457015',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '漂流瓶-定位弹窗',
      desc: '自动点击取消',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.maxhom.weibu.tool.home.activity.ToolBottleActivity',
        'com.maxhom.weibu.tool.msg.MyBottleActivity',
        'com.maxhom.weibu.tool.home.activity.NewMainActivity',
      ],
      rules: [
        {
          matches: '[text="去设置"] +n [text="取消"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13377685',
            'https://i.gkd.li/import/13457033',
            'https://i.gkd.li/import/13457038',
          ],
        },
      ],
    },
  ],
});
