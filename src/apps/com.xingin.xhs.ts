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
          excludeActivityIds: [
            'com.xingin.alioth.search.GlobalSearchActivity',
            'com.xingin.growth.ob.FloatingObPageActivity',
            'com.xingin.matrix.notedetail.NoteDetailActivity',
          ],
          excludeMatches:
            '[text="首页" || text="选择兴趣推荐更精准"][visibleToUser=true]',
          matches:
            '[text*="跳过" || text^="Skip Ad"][text.length<10][!(vid="tv_user_name")][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/9733ada7-4961-4a9f-b48d-3398ecd05508',
          snapshotUrls: [
            'https://i.gkd.li/i/17452158',
            'https://i.gkd.li/i/22951606', // 英语版
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/19035037',
            'https://i.gkd.li/i/20585457',
            'https://i.gkd.li/i/21937254',
          ],
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
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: [
            '.index.v2.IndexActivityV2',
            '.notification.NotificationAuthorizationTranslucentActivity',
            'com.xingin.matrix.notedetail.r10.comment.r10.NoteCommentActivity',
            'com.xingin.authorization.NotificationAuthorizationTranslucentActivity',
          ],
          matches:
            '@ImageView[clickable=true][visibleToUser=true] - LinearLayout > [text^="打开通知" || text^="Enable notifications"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13195753',
            'https://i.gkd.li/i/13222356',
            'https://i.gkd.li/i/13255627',
            'https://i.gkd.li/i/16918033',
            'https://i.gkd.li/i/18417785',
          ],
        },
        {
          key: 1,
          activityIds: '.index.v2.IndexActivityV2',
          matches: '@ImageView <2 FrameLayout - [text^="打开通知"]',
          snapshotUrls: 'https://i.gkd.li/i/13250418',
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
      activityIds: [
        '.index.v2.IndexActivityV2',
        'com.xingin.update.UpdateDialogActivity',
      ],
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
          exampleUrls: 'https://e.gkd.li/7064a569-fcdd-44e2-b4d1-c55e093f4a02',
          snapshotUrls: [
            'https://i.gkd.li/i/15283162',
            'https://i.gkd.li/i/18289347',
          ],
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
          excludeMatches: 'RecyclerView > LinearLayout > [text^="不喜欢"]',
          matches:
            '@FrameLayout[clickable=true] > LinearLayout TextView[text="赞助"||text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13455503',
            'https://i.gkd.li/i/13470690',
            'https://i.gkd.li/i/14392171', // 使用 excludeMatches 防止反复触发规则
          ],
        },
        {
          preKeys: [0],
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
          fastQuery: true,
          activityIds: 'com.xingin.reactnative.ui.XhsReactTranslucentActivity',
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
          activityIds: 'com.xingin.lurker.appscore.ui.AppScoreDialogActivity',
          matches: '[text="您对小红书的评分如何?"]',
          exampleUrls:
            'https://m.gkd.li/57941037/9727815d-b881-4904-bbdc-19ade426977e',
          snapshotUrls: 'https://i.gkd.li/i/15281458',
        },
      ],
    },
    {
      key: 6,
      name: '功能类-评论区-自动展开回复',
      desc: '自动展开更多回复',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.xingin.matrix.notedetail.NoteDetailActivity',
          matches:
            '@[clickable=true] > [vid="loadMoreTV"][text^="展开"][text$="回复"]',
          snapshotUrls: 'https://i.gkd.li/i/25048251',
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-你可能感兴趣的人',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.xingin.xhs.index.v2.IndexActivityV2',
          matches: '[text="你可能感兴趣的人"] +2 Button[text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/25244655',
        },
      ],
    },
    {
      key: 8,
      name: '局部广告-关闭首页信息流中推荐博主',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.xingin.xhs.index.v2.IndexActivityV2',
          matches:
            '[vid="recommend_close"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25245325',
        },
      ],
    },
    {
      key: 9,
      name: '局部广告-直播间各种卡片',
      activityIds: 'com.xingin.alpha.audience.v2.AlphaAudienceActivityV2',
      rules: [
        {
          key: 1,
          fastQuery: true,
          matches:
            '@ViewGroup[clickable=true][visibleToUser=true] - ViewGroup <<n [vid="canvasLayout"]',
          snapshotUrls: 'https://i.gkd.li/i/25245250',
        },
      ],
    },
  ],
});
