import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kugou.android.lite',
  name: '酷狗概念版',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text="开启青少年模式"] + [text="知道了"]',
      snapshotUrls: 'https://i.gkd.li/i/14321697',
    },
    {
      key: 2,
      name: '全屏广告-VIP弹窗',
      rules: [
        {
          key: 0,
          name: '新人限时优惠弹窗',
          activityIds: 'com.kugou.android.app.setting.YoungModeTipsActivity',
          quickFind: true,
          matches: '[text^="新人限时开通"] +3 [text="放弃优惠"]',
          snapshotUrls: 'https://i.gkd.li/i/14321698',
        },
        {
          key: 1,
          name: '组队抽奖弹窗',
          activityIds: 'com.kugou.android.app.setting.YoungModeTipsActivity',
          matches:
            '[id="android:id/content"] > ViewGroup[childCount=3] > ImageView + ImageView + ImageView[clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14321700',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-我的页面-右侧悬浮反馈图标',
      rules: [
        {
          key: 0,
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches:
            'FrameLayout > RelativeLayout > @ImageView[vid!=null][clickable=true][visibleToUser=true] +(2,3) ImageView[vid!=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/14321713',
            'https://i.gkd.li/i/14321718',
          ],
        },
        {
          key: 1,
          preKeys: 0,
          activityIds: 'com.kugou.android.app.MediaActivity',
          quickFind: true,
          matches: '[text="是否取消？"] +4 * > [text="确认"]',
          snapshotUrls: 'https://i.gkd.li/i/14321724',
        },
      ],
    },
    {
      key: 4,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '@ImageView - * > [text="立即升级"]',
      snapshotUrls: 'https://i.gkd.li/i/14622566',
    },
  ],
});
