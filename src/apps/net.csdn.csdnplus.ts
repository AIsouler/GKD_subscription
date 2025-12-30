import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'net.csdn.csdnplus',
  name: 'CSDN',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: ['.activity.MainActivity', '.activity.SetActivity'],
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
      activityIds: 'net.csdn.csdnplus.activity.MainActivity',
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
          preKeys: [1],
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
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.MainActivity',
          matches: '[id="net.csdn.csdnplus:id/tv_cancel"][text="残忍拒绝"]',
          snapshotUrls: 'https://i.gkd.li/i/13251085',
        },
      ],
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.MainActivity',
          matches: [
            '[text="开启推送通知"]',
            '[id="net.csdn.csdnplus:id/iv_close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/12673638',
        },
      ],
    },
    {
      key: 11,
      name: '分段广告-底部广告',
      desc: '点击关闭-点击不感兴趣',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'net.csdn.csdnplus.mvvm.ui.activity.BlogDetailActivity',
          matches:
            'ViewGroup > ViewGroup[childCount=2] > @ImageView[index=1][clickable=true][childCount=0][visibleToUser=true] <<n [vid="fl_template_container" || vid="fl_bottom_ad_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13830821',
            'https://i.gkd.li/i/14312501',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          activityIds: 'net.csdn.csdnplus.mvvm.ui.activity.BlogDetailActivity',
          matches: '@LinearLayout[clickable=true] >(1,2) [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13830858',
            'https://i.gkd.li/i/14312349',
            'https://i.gkd.li/i/24376480', //v6.8.1
          ],
        },
      ],
    },
  ],
});
