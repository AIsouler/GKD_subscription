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
          fastQuery: true,
          activityIds: 'com.remote.cn.MainActivity',
          matches:
            '@Button[text=null][id=""][clickable=true][visibleToUser=true][desc="退出程序"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14047538',
            'https://i.gkd.li/i/24852663',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '通知提示-首页反诈骗提示',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.remote.cn.MainActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true][width>54 && height>54][width<60 && height<60][childCount=0][focusable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24853050',
        },
      ],
    },
  ],
});
