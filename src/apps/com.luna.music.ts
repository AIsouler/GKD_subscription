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
          fastQuery: true,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
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
          activityIds: [
            'com.luna.biz.ad.AdActivity',
            'com.luna.biz.main.main.MainActivity',
          ],
          matches: '@[text="稍后再说"] + [text="立即升级"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14790279',
            'https://i.gkd.li/i/21427972',
          ],
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
          excludeMatches:
            'FlattenUIText[text="立得全天畅听" || text="立即解锁 今日畅听"][visibleToUser=true]',
          matches:
            'FlattenUIText[text="开会员听整月" || text="购买汽水会员" || text*="免费听"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/43099439-a0ab-4da0-a686-5c960df92607',
          snapshotUrls: [
            'https://i.gkd.li/i/13533795',
            'https://i.gkd.li/i/13660652',
            'https://i.gkd.li/i/13533797',
            'https://i.gkd.li/i/14767233',
            'https://i.gkd.li/i/16280954',
            'https://i.gkd.li/i/16342691',
            'https://i.gkd.li/i/17580823',
            'https://i.gkd.li/i/18183749',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/13613296',
            'https://i.gkd.li/i/14237527',
            'https://i.gkd.li/i/18242457',
          ],
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
      key: 8,
      name: '功能类-全自动看广告获取听歌时长',
      rules: [
        {
          key: 0,
          fastQuery: true,
          actionDelay: 15000,
          position: {
            left: 'width * 7.45',
            top: 'height * 0.5',
          },
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches:
            '@FlattenUIText[text="广告"] + [text$="声音"] + [text="反馈"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24521423',
            'https://i.gkd.li/i/24521440',
          ],
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          matches: '[visibleToUser=true][text="奖励已领取"]',
          snapshotUrls: 'https://i.gkd.li/i/24522627',
        },
        {
          preKeys: [0, 1],
          fastQuery: true,
          actionDelay: 1000,
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
            'com.ss.android.excitingvideo.ExcitingVideoActivity',
          ],
          matches:
            '[text="领取奖励" || text^="再看一个" || text="继续观看"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15140816',
            'https://i.gkd.li/i/24521416',
            'https://i.gkd.li/i/24521446',
            'https://i.gkd.li/i/24521516',
          ],
        },
        {
          key: 99,
          fastQuery: true,
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches:
            '@[clickable=true][width<120 && height<120] + LinearLayout > [text="当前无新视频"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24522244',
        },
      ],
    },
    {
      key: 9,
      name: '功能类-关闭广告的声音',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches: '[text="开启声音"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24522999',
          excludeSnapshotUrls: 'https://i.gkd.li/i/24521440',
        },
      ],
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
    {
      key: 12,
      name: '其他-关闭[更多直播]推荐',
      desc: '直播间出现[更多直播]时点击右上角关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.luna.biz.live.plugin.LunaDefaultLivePlayerActivity',
          matches:
            '@[desc="关闭"][clickable=true] <n RelativeLayout + FrameLayout >4 [text="更多直播"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/148466b5-9769-4b79-b648-f2cf7719e3e7',
          snapshotUrls: 'https://i.gkd.li/i/22922565',
        },
      ],
    },
  ],
});
