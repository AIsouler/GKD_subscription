import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.netease.cloudmusic.activity.MainActivity',
        'com.netease.cloudmusic.activity.LoadingActivity',
      ],
      rules: '[id="com.netease.cloudmusic:id/skipBtn"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12700920'],
    },
    {
      key: 1,
      name: '广告卡片',
      rules: [
        {
          activityIds:
            'com.netease.cloudmusic.module.ad.feedback.AdFeedbackBottomSheet',
          matches: '[text="直接关闭"]',
          snapshotUrls: ['https://i.gkd.li/import/12829967'],
        },
        {
          activityIds: [
            'com.netease.cloudmusic.activity.MainActivity',
            'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity',
            'com.netease.cloudmusic.music.biz.comment.activity.ReplyCommentActivity2',
            'com.netease.cloudmusic.music.biz.search.activity.SearchActivity',
          ],
          matches: '[id="com.netease.cloudmusic:id/adTagClose"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12829944',
            'https://gkd-kit.gitee.io/import/12723229',
            'https://gkd-kit.gitee.io/import/12829938',
            'https://gkd-kit.gitee.io/import/12829964',
            'https://gkd-kit.gitee.io/import/12829953',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '我的页面-中间滚动广告',
      activityIds: ['com.netease.cloudmusic.activity.MainActivity'],
      rules:
        '[id="com.netease.cloudmusic:id/auto_scroll_switcher"] + [id="com.netease.cloudmusic:id/close_btn"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12745666'],
    },
    {
      key: 3,
      name: '主页-免费听歌',
      activityIds: ['com.netease.cloudmusic.activity.MainActivity'],
      rules: ['@ImageView + ViewGroup > TextView[text="VIP歌曲免费听30分钟"]'],
      snapshotUrls: ['https://i.gkd.li/import/12843383'],
    },
  ],
});
