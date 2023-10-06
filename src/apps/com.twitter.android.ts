import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.twitter.android',
  name: 'X(推特)',
  groups: [
    {
      key: 1,
      name: '信息流广告-主页',
      desc: '点击右上角关闭,点击我不喜欢',
      activityIds: 'com.twitter.app.main.MainActivity',
      rules: [
        {
          key: 0,
          name: '视频广告-点击右上角关闭',
          matches:
            '@[id="com.twitter.android:id/tweet_curation_action"] <2 LinearLayout + LinearLayout >n [id="com.twitter.android:id/upper_video_attribution"][text="视频将在广告后播放"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12798795',
        },
        {
          key: 1,
          name: '推荐广告-点击右上角关闭',
          matches:
            '@[id="com.twitter.android:id/tweet_curation_action"] <2 * + [id="com.twitter.android:id/tweet_auto_playable_content_parent"] > [id="com.twitter.android:id/tweet_promoted_badge_bottom"][text="推荐"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12813235',
        },
        {
          preKeys: [0, 1],
          key: 10,
          name: '点击[我不喜欢这个广告]',
          matches:
            '@ViewGroup > [id="com.twitter.android:id/action_sheet_item_title"][text="我不喜欢这个广告"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12798810',
        },
      ],
    },
    {
      key: 2,
      name: '信息流广告-帖子详情页',
      desc: '点击右上角关闭,点击屏蔽用户,确认屏蔽.点击[我不喜欢]会返回主页,因此点击[屏蔽]',
      activityIds: 'com.twitter.tweetdetail.TweetDetailActivity',
      rules: [
        {
          name: '评论区广告-点击右上角关闭',
          key: 0,
          matches:
            '@[id="com.twitter.android:id/tweet_curation_action"] +n [id="com.twitter.android:id/tweet_promoted_badge_bottom"][text="推荐"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12825969',
        },
        {
          preKeys: [0],
          key: 10,
          name: '点击屏蔽',
          matches:
            '@ViewGroup > [id="com.twitter.android:id/action_sheet_item_title"][text^="屏蔽"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12828815',
        },
        {
          preKeys: 10,
          key: 11,
          name: '二次确认-点击屏蔽',
          matches: '[text="取消"] + [text="屏蔽"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12828832',
        },
      ],
    },
  ],
});
