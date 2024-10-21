import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xingin.xhs',
  name: '小红书',
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
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/9733ada7-4961-4a9f-b48d-3398ecd05508',
          snapshotUrls: 'https://i.gkd.li/i/17452158',
        },
        {
          key: 1,
          matches: '[vid="splash_count_down_view"]',
          exampleUrls: 'https://e.gkd.li/6ed22307-ce1d-479e-8a8d-a6fe4ffa614c',
          snapshotUrls: [
            'https://i.gkd.li/i/17109105',
            'https://i.gkd.li/i/17108010', // 全局规则在此误触
          ],
        },
      ],
    },
    {
      key: 1,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 30000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: [
            '.index.v2.IndexActivityV2',
            '.notification.NotificationAuthorizationTranslucentActivity',
            'com.xingin.matrix.notedetail.r10.comment.r10.NoteCommentActivity',
          ],
          matches: '@ImageView <2 FrameLayout >2 [text^="打开通知"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13195753',
            'https://i.gkd.li/i/13222356',
            'https://i.gkd.li/i/13255627',
          ],
        },
        {
          key: 1,
          activityIds: '.index.v2.IndexActivityV2',
          matches: '@ImageView <2 FrameLayout - [text^="打开通知"]',
          snapshotUrls: 'https://i.gkd.li/i/13250418',
        },
        {
          key: 2,
          activityIds:
            'com.xingin.authorization.NotificationAuthorizationTranslucentActivity',
          matches: '[vid="mNegativeImageView"]',
          exampleUrls: 'https://e.gkd.li/01c3cb0b-80b1-4e70-a330-6f4afb7ddf44',
          snapshotUrls: 'https://i.gkd.li/i/16918033',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches: '@ImageView <2 * + * > [text="NEW"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13246890',
            'https://i.gkd.li/i/13741680',
            'https://i.gkd.li/i/14445193',
          ],
        },
        {
          key: 1,
          matches: 'Button[text="立即安装"] + Button[text="稍后再说"]',
          snapshotUrls: 'https://i.gkd.li/i/15283162',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-信息流广告',
      desc: '长按"赞助"/"广告"标识的卡片-点"不感兴趣"',
      fastQuery: true,
      activityIds: 'com.xingin.xhs.index.v2.IndexActivityV2',
      rules: [
        {
          key: 0,
          action: 'longClick',
          name: '长按"赞助"/"广告"卡片',
          matches:
            '@FrameLayout[clickable=true] > LinearLayout TextView[text="赞助"||text="广告"][visibleToUser=true]',
          excludeMatches: 'RecyclerView > LinearLayout > [text^="不喜欢"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13455503',
            'https://i.gkd.li/i/13470690',
            'https://i.gkd.li/i/14392171', // 使用 excludeMatches 防止反复触发规则
          ],
        },
        {
          preKeys: 0,
          name: '点"不感兴趣"',
          matches:
            'RecyclerView > @LinearLayout[index=0] > TextView[text^="不喜欢"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13455500',
            'https://i.gkd.li/i/14392187',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-优惠券弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'com.xingin.reactnative.ui.XhsReactTranslucentActivity',
          fastQuery: true,
          matches:
            '@ImageView[visibleToUser=true] < * -2 * > [text="你有新人券待领取"]',
          snapshotUrls: 'https://i.gkd.li/i/14391484',
        },
      ],
    },
    {
      key: 5,
      name: '评价提示-评分弹窗',
      desc: '返回关闭弹窗',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          matches: '[text="您对小红书的评分如何?"]',
          exampleUrls:
            'https://m.gkd.li/57941037/9727815d-b881-4904-bbdc-19ade426977e',
          snapshotUrls: 'https://i.gkd.li/i/15281458',
        },
      ],
    },
  ],
});
