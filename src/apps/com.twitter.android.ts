import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.twitter.android',
  name: 'X(推特)',
  groups: [
    {
      key: 1,
      name: '分段广告-主页信息流广告',
      desc: '点击右上角关闭,点击我不喜欢',
      actionCd: 3000, // https://github.com/gkd-kit/subscription/issues/832
      fastQuery: true,
      activityIds: [
        'com.twitter.app.main.MainActivity',
        'com.twitter.app.profiles.ProfileActivity',
      ],
      rules: [
        {
          key: 0,
          name: '视频广告-点击右上角关闭',
          matches:
            '@[vid="tweet_curation_action"] <2 * + * >3 [text="视频将在广告后播放"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12798795',
            'https://i.gkd.li/i/14782884',
          ],
        },
        {
          key: 1,
          name: '推荐广告-点击右上角关闭',
          matches: '@[vid="tweet_curation_action"] <2 * + * > [text$="推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12813235',
            'https://i.gkd.li/i/14782897',
            'https://i.gkd.li/i/17182889',
          ],
        },
        {
          key: 2,
          matches:
            '[vid="tweet_curation_action"] - [vid="tweet_ad_badge_top_right"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/705dd827-ff04-4233-af38-60d92439e1f3',
          snapshotUrls: 'https://i.gkd.li/i/24359526',
        },
        {
          preKeys: [0, 1, 2],
          key: 10,
          name: '点击[我不喜欢这个广告]',
          matches:
            '@ViewGroup[clickable=true] > [text="我不喜欢这个广告" || text^="屏蔽"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12798810',
            'https://i.gkd.li/i/14782902',
            'https://i.gkd.li/i/20239421',
            'https://i.gkd.li/i/24359537',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-帖子详情页、搜索页信息流广告',
      desc: '点击右上角关闭,点击屏蔽用户,确认屏蔽.点击[我不喜欢]会返回主页,因此点击[屏蔽]',
      fastQuery: true,
      activityIds: [
        'com.twitter.tweetdetail.TweetDetailActivity',
        'com.twitter.android.search.implementation.results.SearchActivity',
      ],
      actionCd: 3000,
      rules: [
        {
          name: '点击右上角关闭-1',
          key: 0,
          matches:
            '@[id="com.twitter.android:id/tweet_curation_action"] +n [id="com.twitter.android:id/tweet_promoted_badge_bottom"][text="推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12825969',
            'https://i.gkd.li/i/12847584',
          ],
        },
        {
          name: '点击右上角关闭-2',
          key: 1,
          matches:
            '@[id="com.twitter.android:id/tweet_curation_action"] <2 * + [id="com.twitter.android:id/tweet_auto_playable_content_parent"] > [id="com.twitter.android:id/tweet_promoted_badge_bottom"][text$="推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12882676',
            'https://i.gkd.li/i/12904603',
          ],
        },
        {
          name: '点击右上角关闭-英文',
          key: 2,
          matches:
            '[id="com.twitter.android:id/tweet_ad_badge_top_right"] + [id="com.twitter.android:id/tweet_curation_action"]',
          snapshotUrls: ['https://i.gkd.li/i/13680756'],
        },
        {
          preKeys: [0, 1, 2],
          key: 10,
          name: '点击屏蔽',
          matches:
            '@ViewGroup > [id="com.twitter.android:id/action_sheet_item_title"][text^="屏蔽"||text^="屏蔽"||text^="Block"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12828815',
            'https://i.gkd.li/i/12847600',
            'https://i.gkd.li/i/12904602',
            'https://i.gkd.li/i/13680783', // 兼容英文
          ],
        },
        {
          preKeys: [10],
          key: 11,
          name: '二次确认-点击屏蔽',
          matches:
            '[text="取消"||text^="Cancel"] + [text="屏蔽"||text^="Block"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12828832',
            'https://i.gkd.li/i/12904601',
            'https://i.gkd.li/i/13680798', // 兼容英文
          ],
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-用户资料页信息流广告',
      desc: '点击右上角关闭,点击我不喜欢',
      fastQuery: true,
      activityIds: 'com.twitter.app.profiles.ProfileActivity',
      actionCd: 3000,
      rules: [
        {
          name: '点击右上角关闭-1',
          key: 0,
          matches:
            '@[id="com.twitter.android:id/tweet_curation_action"] +n [id="com.twitter.android:id/tweet_promoted_badge_bottom"][text="推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12825969',
            'https://i.gkd.li/i/12847584',
          ],
        },
        {
          name: '点击右上角关闭-2',
          key: 1,
          matches:
            '@[id="com.twitter.android:id/tweet_curation_action"] <2 * + [id="com.twitter.android:id/tweet_auto_playable_content_parent"] > [id="com.twitter.android:id/tweet_promoted_badge_bottom"][text$="推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12882676',
            'https://i.gkd.li/i/12904603',
          ],
        },
        {
          preKeys: [0, 1],
          key: 10,
          name: '点击[我不喜欢这个广告]',
          matches:
            '@ViewGroup > [id="com.twitter.android:id/action_sheet_item_title"][text="我不喜欢这个广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12798810',
        },
      ],
    },
    {
      key: 4,
      name: '评价提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.twitter.app.main.MainActivity',
          matches: '[id="com.twitter.android:id/app_rating_button_never"]',
          snapshotUrls: 'https://i.gkd.li/i/13774150',
        },
      ],
    },
    {
      key: 5,
      name: '权限提示-通知权限',
      desc: '点击"Not now"',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.twitter.app.main.MainActivity',
          matches:
            '@[clickable=true] > [visibleToUser=true][text="Not now"] <<n [vid="half_cover_recycler_view_holder"]',
          snapshotUrls: 'https://i.gkd.li/i/13930126',
        },
      ],
    },
    {
      key: 6,
      name: '功能类-自动点击翻译',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.twitter.tweetdetail.TweetDetailActivity',
          matches: '[vid="translation_link"][text^="翻译"]',
          exampleUrls:
            'https://m.gkd.li/57941037/40ece44f-883f-429a-aa0c-17dac15a50e4',
          snapshotUrls: [
            'https://i.gkd.li/i/14189817',
            'https://i.gkd.li/i/14615911',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '功能类-自动点击"显示更多帖子"',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.twitter.app.main.MainActivity',
          matches: '@FrameLayout[clickable=true] > [text="显示更多帖子"]',
          exampleUrls:
            'https://m.gkd.li/57941037/7efa8af7-90d3-42b4-bf5d-3d83775f175a',
          snapshotUrls: 'https://i.gkd.li/i/14189847',
        },
      ],
    },
  ],
});
