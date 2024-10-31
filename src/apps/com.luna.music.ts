import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.luna.music',
  name: '汽水音乐',
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
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          snapshotUrls: 'https://i.gkd.li/i/14232395',
        },
        {
          key: 1,
          fastQuery: true,
          matches: '[text^="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15087528',
            'https://i.gkd.li/i/15148298', // 避免误触
          ],
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '@[text="稍后再说"] + [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/14790279',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-VIP弹窗',
      desc: '直接关闭所有底部半屏弹窗',
      fastQuery: true,
      activityIds: [
        'com.luna.biz.main.main.MainActivity',
        'com.luna.biz.ad.AdActivity',
      ],
      rules: [
        {
          key: 0,
          name: '底部半屏弹窗',
          action: 'back', // 使用点击方式有概率无效
          matches:
            'FlattenUIText[text="开会员听整月" || text="购买汽水会员" || text="试听中，开通VIP听全曲" || text*="看视频全天免费听"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13533795',
            'https://i.gkd.li/i/13660652',
            'https://i.gkd.li/i/13533797',
            'https://i.gkd.li/i/14767233',
            'https://i.gkd.li/i/16280954',
            'https://i.gkd.li/i/16342691',
            'https://i.gkd.li/i/17580823',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/13613296',
        },
        {
          key: 2,
          name: '全屏弹窗',
          matches:
            '@LynxFlattenUI[clickable=true] -2 FlattenUIText[text="立即抢购"]',
          snapshotUrls: 'https://i.gkd.li/i/16278152',
        },
      ],
    },
    {
      key: 7,
      name: '功能类-看广告视频拿VIP',
      desc: '30s广告后点击"跳过"',
      activityIds: [
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        'com.luna.biz.ad.AdActivity',
      ],
      rules: [
        {
          key: 0,
          name: '等待30s点击"跳过"',
          actionDelay: 30000,
          matches: 'WebView > WebView > View TextView[text="| 跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13611006',
            'https://i.gkd.li/i/13613085',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击"坚持退出"',
          fastQuery: true,
          matches: '[text="坚持退出"]',
          snapshotUrls: 'https://i.gkd.li/i/13613184',
        },
      ],
    },
    {
      key: 8,
      name: '功能类-看广告获取听歌时长',
      desc: '点击领取成功-点击坚持退出',
      activityIds: [
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        'com.ss.android.excitingvideo.ExcitingVideoActivity',
        'com.luna.biz.ad.AdActivity',
      ],
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '@[text*="领取成功"][clickable=true] - [text="反馈"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14767236',
            'https://i.gkd.li/i/14391770',
            'https://i.gkd.li/i/15033124',
          ],
        },
        {
          key: 2,
          matches: '[text="奖励已领取"]',
          snapshotUrls: 'https://i.gkd.li/i/15140802',
        },
        {
          preKeys: [0, 2],
          key: 1,
          fastQuery: true,
          matches: '[text="坚持退出"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14767235',
            'https://i.gkd.li/i/15033126',
            'https://i.gkd.li/i/15140816',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '功能类-看视频免费听弹窗',
      desc: '点击【立得全天畅听】',
      activityIds: 'com.luna.biz.main.main.MainActivity',
      rules: '[text="立得全天畅听"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/14237527',
    },
    {
      key: 10,
      name: '评价提示-评分弹窗',
      desc: '使用返回关闭弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          action: 'back',
          matches: '[text="为汽水音乐评分"]',
          exampleUrls:
            'https://m.gkd.li/57941037/a7e53af0-8b84-4619-b369-69b949ab2ce4',
          snapshotUrls: 'https://i.gkd.li/i/14720841',
        },
      ],
    },
    {
      key: 11,
      name: '局部广告-悬浮窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.luna.biz.main.main.MainActivity',
          matches:
            '[id="com.luna.music:id/fl_pendant_container"] > [id="com.luna.music:id/view_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/8a427d5f-680b-4562-9cf3-90b1db82df0f',
          snapshotUrls: 'https://i.gkd.li/i/13674376',
        },
      ],
    },
  ],
});
