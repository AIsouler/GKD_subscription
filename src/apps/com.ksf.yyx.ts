import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ksf.yyx',
  name: 'OMOFUN',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '[id="com.ksf.yyx:id/ksad_splash_circle_skip_view"]',
          snapshotUrls: 'https://i.gkd.li/i/12775918',
        },
        {
          key: 1,
          matches:
            '[id="com.ksf.yyx:id/ksad_splash_root_container"] [childCount=3] > @ImageView[clickable=true] - [text="|"]',
          snapshotUrls: 'https://i.gkd.li/i/12775919',
        },
        {
          key: 2,
          matches: '[text^="跳过 "][text.length<=4][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12775926',
        },
      ],
    },
    {
      key: 1,
      name: '通知提示-公告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[desc="了解更多"] - [desc="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/i/12775920',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-插屏广告',
      activityIds: [
        'com.ksf.yyx.MainActivity',
        'com.sigmob.sdk.base.common.TransparentAdActivity',
        // 'com.miui.wakepath.ui.ConfirmStartActivity', //抓到activityIds为小米的 不确定是否正常
        // 'com.miui.home.launcher.Launcher',
      ],
      rules: [
        {
          matches: '[id="com.ksf.yyx:id/ksad_container"] [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/12775922',
        },
        {
          matches:
            '[id="com.ksf.yyx:id/ksad_container"] TextView[text="广告"] <2 ViewGroup -n ViewGroup[childCount=1] > @ViewGroup[childCount=1 && clickable=true] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/12775923',
            'https://i.gkd.li/i/12998899',
          ],
        },
        {
          matches: '[id="ad_area"] [id="close_btn"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12775925',
            'https://i.gkd.li/i/12775924',
          ],
        },
        {
          action: 'clickCenter',
          matches:
            '[text^="去"][text$="看看"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout[childCount=1] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/12775921',
            'https://i.gkd.li/i/12776903',
          ],
        },
        {
          action: 'clickCenter',
          matches:
            'TextView[text="查看详情"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12789196',
        },
        {
          action: 'clickCenter',
          matches:
            'TextView[text="立即下载"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12789928',
        },
      ],
    },
  ],
});
