import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yoloho.dayima',
  name: '大姨妈',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/14665571',
            'https://i.gkd.li/i/13800282',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      rules: [
        {
          key: 0,
          name: '腾讯SDK',
          matches:
            '[id="android:id/content"] >n FrameLayout[index=2] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13800255',
        },
      ],
    },
  ],
});
