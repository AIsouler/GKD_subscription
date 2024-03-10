import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'net.csdn.csdnplus',
  name: 'CSDN',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: ['https://i.gkd.li/i/12673680'],
        },
        {
          quickFind: true,
          matches:
            '@View <3 FrameLayout <2 FrameLayout < FrameLayout < [vid="fl_third_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/13826577',
        },
        {
          // 无法使用 quickFind
          matches: '[id$="tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/13224627',
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
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
      quickFind: true,
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
      quickFind: true,
      rules: '[id="net.csdn.csdnplus:id/tv_cancel"][text="残忍拒绝"]',
      snapshotUrls: 'https://i.gkd.li/i/13251085',
    },
    {
      key: 10,
      name: '通知提示-请求推送通知弹窗',
      quickFind: true,
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
          quickFind: true,
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
