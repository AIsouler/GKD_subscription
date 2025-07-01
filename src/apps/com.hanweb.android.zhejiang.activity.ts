import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hanweb.android.zhejiang.activity',
  name: '浙里办',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          actionMaximum: 1,
          matches:
            '@[id="com.hanweb.android.zhejiang.activity:id/iv_cancel"] -2 * >2 [text="发现新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/13402048',
        },
        // key 1,2 共同发挥作用，先点击[立即升级]，然后返回，即可跳过更新弹窗
        {
          key: 1,
          actionMaximumKey: 0,
          matches:
            'LinearLayout[childCount=2] > LinearLayout[childCount=2] > [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/13520598',
        },
        {
          preKeys: [1],
          key: 2,
          matches:
            '[text="版本更新"] - [id="com.hanweb.android.zhejiang.activity:id/rl_back"]',
          snapshotUrls: 'https://i.gkd.li/i/13521059',
        },
      ],
    },
  ],
});
