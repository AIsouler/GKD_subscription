import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.weico.international',
  name: '微博轻享版',
  groups: [
    {
      key: -1,
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
          order: -1,
          anyMatches: [
            '@[clickable=true][visibleToUser=true] + ViewGroup > [text="跳过"]',
            '@[clickable=true] - [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]', // https://github.com/AIsouler/GKD_subscription/issues/1024
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14549281',
            'https://i.gkd.li/i/14549328', // 小窗模式下全局规则触发无效
            'https://i.gkd.li/i/18792649', // visibleToUser=false
            'https://i.gkd.li/i/20990401',
          ],
        },
        {
          key: 1,
          excludeMatches: [
            '@[clickable=true] - [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
            '@[clickable=true][visibleToUser=true] + ViewGroup > [text="跳过"]',
          ],
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14661654',
            'https://i.gkd.li/i/14661622',
          ],
        },
      ],
    },
    {
      key: 0,
      name: '分段广告-信息流广告',
      desc: '出现在主页,搜索页',
      fastQuery: true,
      matchRoot: true,
      forcedTime: 10000,
      activityIds: [
        'com.google.android.material.bottomsheet.BottomSheetDialog',
        'com.weico.international.activity.MainFragmentActivity',
        'com.weico.international.ui.search.SearchActivity',
        'com.weico.international.ui.detail.StatusDetailV3Activity',
      ],
      rules: [
        {
          key: 0,
          name: '点击卡片广告右上角[x]',
          matches: '[vid="item_timeline_ad_action"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12857202',
            'https://i.gkd.li/i/14444744',
            'https://i.gkd.li/i/16667201',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击不感兴趣',
          matches:
            '@View[clickable=true] > [visibleToUser=true][text="不感兴趣"] <<n [vid="design_bottom_sheet"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12505755',
            'https://i.gkd.li/i/12505764',
            'https://i.gkd.li/i/14798365',
            'https://i.gkd.li/i/16667202',
          ],
        },
      ],
    },
  ],
});
