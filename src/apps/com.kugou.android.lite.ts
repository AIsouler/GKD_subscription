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
      fastQuery: true,
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
          fastQuery: true,
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
          fastQuery: true,
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
      fastQuery: true,
      rules: '@ImageView - * > [text="立即升级"]',
      snapshotUrls: 'https://i.gkd.li/i/14622566',
    },
    {
      key: 5,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches: '@[text*="跳过"] + [text*="广告"]',
          exampleUrls: 'https://e.gkd.li/64dd159b-bff5-4dff-a4b9-d63f5b34acb7',
          snapshotUrls: 'https://i.gkd.li/i/16407631',
        },
      ],
    },
    {
      key: 6,
      name: '功能类-播放页听歌领VIP',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches: '@LinearLayout[clickable=true] > TextView[text="听歌领VIP"]',
          exampleUrls: 'https://e.gkd.li/df927124-4e7a-43bd-8d42-3eb428eecf78',
          snapshotUrls: 'https://i.gkd.li/i/16554695',
        },
        {
          key: 1,
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches:
            '@ImageView[clickable=true] - FrameLayout >2 [text="立即领取福利"]',
          exampleUrls: 'https://e.gkd.li/51fbe6aa-d0da-4f08-aae0-2eed4e6c0ad1',
          snapshotUrls: 'https://i.gkd.li/i/16594001',
        },
      ],
    },
  ],
});
