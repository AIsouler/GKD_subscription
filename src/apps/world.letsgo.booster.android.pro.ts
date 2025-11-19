import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'world.letsgo.booster.android.pro',
  name: '快连 VPN',
  groups: [
    {
      key: 1,
      name: '通知提示-各种提示弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'world.letsgo.booster.android.pages.home.HomeActivity',
            'world.letsgo.booster.android.pages.guide.GuideActivity',
          ],
          matches:
            '[text="我会设置" || text="快快收下" || text="知道了"][visibleToUser=true]',
          exampleUrls: [
            'https://e.gkd.li/0fe731a4-bf4c-4d35-a157-c1304e8df4ba',
            'https://e.gkd.li/efeb874b-f3bf-4899-a069-387d020eb1f5',
            'https://e.gkd.li/5868f38e-b929-4423-adfc-82b05ea1733c',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23619426',
            'https://i.gkd.li/i/23619427',
            'https://i.gkd.li/i/23619428',
          ],
        },
      ],
    },
  ],
});
