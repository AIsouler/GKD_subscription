import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.icredit',
  name: '企查查',
  groups: [
    {
      key: 1,
      name: '全屏广告-VIP弹窗',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.android.icredit.ui.MainMenuActivity',
          matches:
            '[text$="限时返场" || text="首单有礼"] >2 View[childCount=2] > Image[visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/eb232325-12e4-495f-a9f3-5f853d5e66f9',
          snapshotUrls: [
            'https://i.gkd.li/i/14720494',
            'https://i.gkd.li/i/15112280',
          ],
        },
      ],
    },
  ],
});
