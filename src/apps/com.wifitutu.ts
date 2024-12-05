import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wifitutu',
  name: 'WiFi万能钥匙',
  groups: [
    {
      key: 1,
      name: '局部广告-首页-WiFi列表广告',
      desc: '点击关闭',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.wifitutu.ui.main.MainActivity',
          matches:
            '@View[clickable=true][childCount=0][visibleToUser=true] < FrameLayout[desc^="dislike"] + FrameLayout >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13233916',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.wifitutu.ui.main.MainActivity',
          matches:
            '@Image[text=""] < View +n View > View > TextView[visibleToUser=true][text="广告"] <<n [id="com.wifitutu:id/ad_part"]',
          snapshotUrls: 'https://i.gkd.li/i/13234048',
        },
      ],
    },
  ],
});
