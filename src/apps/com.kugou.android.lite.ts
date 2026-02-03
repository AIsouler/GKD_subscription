import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kugou.android.lite',
  name: '酷狗概念版',
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
          fastQuery: true,
          action: 'clickCenter',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/94c7fc27-891f-4206-b933-f26661041b99',
          snapshotUrls: 'https://i.gkd.li/i/21451911',
        },
        {
          key: 1,
          matches: '[desc*="跳过"][desc.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/7aa8bc5b-e14c-4cef-9eae-b89aac8ef459',
          snapshotUrls: 'https://i.gkd.li/i/21750055',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-VIP弹窗',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.kugou.android.app.setting.YoungModeTipsActivity',
          matches: '[text^="新人限时开通"] +3 [text="放弃优惠"]',
          snapshotUrls: 'https://i.gkd.li/i/14321698',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: [
            'com.kugou.android.app.setting.YoungModeTipsActivity',
            'com.kugou.common.useraccount.app.KgUserLoginAndRegActivity',
          ],
          matches:
            '@ImageView[clickable=true][visibleToUser=true][childCount=0] <3 ViewGroup[childCount=3] < [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14321700',
            'https://i.gkd.li/i/25018524',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds:
            'com.kugou.common.useraccount.app.KgUserLoginAndRegActivity',
          matches: [
            '[text*="已过期"][visibleToUser=true]',
            '[text="狠心拒绝"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/25020137',
        },
        {
          key: 3,
          activityIds:
            'com.kugou.framework.musicfees.ui.feeintercept.FeeInterceptWebActivity',
          matches:
            'WebView > [id="body"] > [id="root"] >2 View > Image[index=0][clickable=true][visibleToUser=true][width<70 && width<70]',
          snapshotUrls: 'https://i.gkd.li/i/25022292',
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
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches: '@ImageView - * > [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/14622566',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches: '@[text*="跳过"] + [text*="广告"]',
          exampleUrls: 'https://e.gkd.li/64dd159b-bff5-4dff-a4b9-d63f5b34acb7',
          snapshotUrls: 'https://i.gkd.li/i/16407631',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches:
            '@ImageView[childCount=0][clickable=true][visibleToUser=true][width<160 && height<160] <2 ViewGroup[childCount=3] < FrameLayout < LinearLayout < LinearLayout <2 LinearLayout < FrameLayout < FrameLayout <2 FrameLayout < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/0776da1e-3ff6-4fba-a7e9-de8fa1fe5344',
          snapshotUrls: 'https://i.gkd.li/i/23619626',
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
    {
      key: 7,
      name: '评价提示',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches:
            '@ImageView[clickable=true][childCount=0] - LinearLayout > [text*="求五星鼓励"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25002911',
        },
      ],
    },
    {
      key: 8,
      name: '分段广告-评论区广告',
      fastQuery: true,
      activityIds: 'com.kugou.android.app.MediaActivity',
      rules: [
        {
          key: 0,
          matches: '@[clickable=true] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/25020531',
        },
        {
          preKeys: [0],
          matches: '[text="关闭这条广告"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/25020623',
        },
      ],
    },
    {
      key: 9,
      name: '局部广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds:
            'com.kugou.common.useraccount.app.KgUserLoginAndRegActivity',
          matches: '@[text*="跳过"] + [text*="广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25021020',
        },
        {
          key: 1,
          activityIds:
            'com.kugou.common.useraccount.app.KgUserLoginAndRegActivity',
          matches:
            '@ImageView[clickable=true][childCount=0][parent.childCount<4][index=parent.childCount.minus(1)][width<60 && height<60] - [!(text=null)]',
          snapshotUrls: [
            'https://i.gkd.li/i/25021318',
            'https://i.gkd.li/i/25021659',
          ],
        },
      ],
    },
  ],
});
