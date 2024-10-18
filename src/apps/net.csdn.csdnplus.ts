import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'net.csdn.csdnplus',
  name: 'CSDN',
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
          matches: '[text*="跳过"][text.length<=10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12673680',
        },
        {
          key: 1,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/13826577',
            'https://i.gkd.li/i/13224627',
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
          matches:
            '[id="net.csdn.csdnplus:id/update"] -2 [id="net.csdn.csdnplus:id/cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12673693',
            'https://i.gkd.li/i/12673654',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-信息流广告',
      fastQuery: true,
      activityIds: ['net.csdn.csdnplus.activity.MainActivity'],
      rules: [
        {
          key: 1,
          matches: '[text="广告"] + [id="net.csdn.csdnplus:id/iv_more"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12673738',
            'https://i.gkd.li/i/13224538',
          ],
        },
        {
          preKeys: 1,
          key: 2,
          matches:
            '@[clickable=true] > [id="net.csdn.csdnplus:id/img_feedback_title"][text="重复推荐该广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12673787',
            'https://i.gkd.li/i/13224551',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '评价提示-软件好评弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[id="net.csdn.csdnplus:id/tv_cancel"][text="残忍拒绝"]',
      snapshotUrls: 'https://i.gkd.li/i/13251085',
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: {
        matches: [
          '[text="开启推送通知"]',
          '[id="net.csdn.csdnplus:id/iv_close"]',
        ],
        snapshotUrls: ['https://i.gkd.li/i/12673638'],
      },
    },
    {
      key: 11,
      name: '分段广告-底部广告',
      desc: '点击X-点击不感兴趣',
      rules: [
        {
          key: 0,
          activityIds: 'net.csdn.csdnplus.mvvm.ui.activity.BlogDetailActivity',
          matches:
            '[vid$="_container"] > FrameLayout[childCount=3] >(2,3) ViewGroup[childCount=2] >2 ViewGroup[childCount=2] > ImageView[visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13830821',
            'https://i.gkd.li/i/14312501',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          fastQuery: true,
          activityIds: 'net.csdn.csdnplus.mvvm.ui.activity.BlogDetailActivity',
          matches: '@LinearLayout[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13830858',
            'https://i.gkd.li/i/14312349',
          ],
        },
      ],
    },
  ],
});
