import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.example.raylink_flutter',
  name: 'RayLink',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: '[desc="立即升级"] + [desc="以后再说"]',
          snapshotUrls: 'https://i.gkd.li/i/13659530',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-退出软件时点击"退出程序"',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.remote.cn.MainActivity',
          matches: '[text="退出程序"]',
          snapshotUrls: 'https://i.gkd.li/i/14047538',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.remote.cn.MainActivity',
          matches:
            '@Button[desc="退出程序"] <4 View < View < View < View < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/24852663',
        },
      ],
    },
    {
      key: 4,
      name: '通知提示-首页反诈骗提示',
      rules: [
        {
          activityIds: 'com.remote.cn.MainActivity',
          matches:
            '[desc="允许远程本设备"] +2 View[childCount=1][index=parent.childCount.minus(1)] > ImageView[clickable=true][width<80 && height<80]',
          snapshotUrls: [
            'https://i.gkd.li/i/24853050',
            'https://i.gkd.li/i/24995320',
          ],
        },
      ],
    },
  ],
});
