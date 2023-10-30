import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xuexiaoyi.xxy',
  name: '学小易',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'View[id="com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/12895001',
    },
    {
      key: 1,
      name: '首页-底部广告',
      activityIds: 'com.xuexiaoyi.entrance.main.MainActivity',
      rules: [
        {
          key: 0,
          name: '点击在下方的X',
          matches: [
            'View[text="广告"] < View <n View + View > Image[text.length=0]',
          ],
          snapshotUrls: ['https://i.gkd.li/import/13068836'],
        },
        {
          key: 1,
          name: '点击在上方的X',
          matches: ['[text="查看详情"] -n View > Image[text.length=0]'],
          snapshotUrls: [
            'https://i.gkd.li/import/13068811',
            'https://i.gkd.li/import/13202990',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          name: '点击不感兴趣',
          matches: 'TextView[text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13068819',
        },
      ],
    },
    {
      key: 2,
      name: '升级弹窗',
      desc: '自动点击以后再说。',
      activityIds: 'com.xuexiaoyi.entrance.main.MainActivity',
      enable: false,
      quickFind: true,
      rules: '[text="立即体验"] + [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/import/13203105',
    },
  ],
});
