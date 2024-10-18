import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kugou.android',
  name: '酷狗音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '[desc="跳过"||desc="GdtCountDownView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12775410',
            'https://i.gkd.li/i/13426030',
            'https://i.gkd.li/i/13468987',
          ],
        },
        {
          key: 1,
          position: {
            left: 'width * 0.6858',
            top: 'width * 0.3906',
          },
          matches: '[desc="createSkipView"]',
          exampleUrls:
            'https://m.gkd.li/57941037/fc4a38c9-20aa-4cfc-9a92-c20e9194418b',
          snapshotUrls: 'https://i.gkd.li/i/14609953',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-卡片广告',
      matchRoot: true,
      rules: [
        {
          key: 0,
          fastQuery: true,
          forcedTime: 10000,
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches:
            'ViewGroup[childCount=2] > ImageView + @FrameLayout[clickable=true] > LinearLayout > ImageView <<n [id="android:id/list"]',
          snapshotUrls: 'https://i.gkd.li/i/16434752',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches:
            'TextView[text!=null] <n ViewGroup > @ImageView[desc="关闭"][visibleToUser=true][clickable=true] <<n [id="android:id/list"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14964889',
            'https://i.gkd.li/i/15024041',
            'https://i.gkd.li/i/15468481',
            'https://i.gkd.li/i/16200618',
            'https://i.gkd.li/i/17088057', // 避免误触
          ],
        },
        {
          key: 2,
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches: '[desc="关闭广告"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15024812',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches: '@ImageView[clickable=true] <n * > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/15520336',
        },
        {
          key: 4,
          forcedTime: 10000,
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches:
            'RelativeLayout > @RelativeLayout[clickable=true] > [desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/16114590',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-VIP弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '@ImageView[clickable=true][visibleToUser=true] + RelativeLayout >2 [text*="豪华VIP已过期"]',
          exampleUrls: 'https://e.gkd.li/cab683ac-801d-4089-8b5d-548954761c08',
          snapshotUrls: 'https://i.gkd.li/i/13548005',
        },
        {
          key: 1,
          activityIds: '.app.MediaActivity',
          matches:
            'WebView[text="开通会员"] >7 @TextView[clickable=true][childCount=0] +2 [text="当前歌曲支持蝰蛇全景声"]',
          exampleUrls: 'https://e.gkd.li/86e4a797-5366-4579-81ee-bc5354e95568',
          snapshotUrls: 'https://i.gkd.li/i/17177377',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-[看广告免费听歌]弹窗',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches: '[desc="看广告，免费听会员歌"] +2 [desc="关闭"]',
          exampleUrls:
            'https://m.gkd.li/57941037/dfd70c7c-3200-493e-9afa-404de5fcd2ff',
          snapshotUrls: 'https://i.gkd.li/i/14722104',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-[开启音乐DJ]弹窗',
      desc: '勾选[今日不再提醒]-点击[关闭]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '@[checked=false] + [text="今日不再提醒"]',
          exampleUrls:
            'https://m.gkd.li/57941037/69f564e9-464a-488b-a181-f1085176b49f',
          snapshotUrls: 'https://i.gkd.li/i/14722457',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '@ImageView - * > [text="今日不再提醒"]',
          exampleUrls:
            'https://m.gkd.li/57941037/69f564e9-464a-488b-a181-f1085176b49f',
          snapshotUrls: 'https://i.gkd.li/i/14722457',
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true][index=1] <2 FrameLayout[childCount=2] < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout - FrameLayout >8 [desc="底部导航"] + [text="我的"]',
          exampleUrls: 'https://e.gkd.li/2b240676-4dac-4375-b238-2d570962efd1',
          snapshotUrls: 'https://i.gkd.li/i/17004903',
        },
      ],
    },
  ],
});
