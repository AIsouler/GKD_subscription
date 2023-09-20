import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sina.weibo',
  name: '微博',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.sina.weibo.mobileads.view.',
      rules: ['@RelativeLayout > TextView[text=`跳过`]'],
    },
    {
      key: 1,
      name: '评论区顶部-相关推荐',
      activityIds: 'com.sina.weibo.feed.DetailWeiboActivity',
      rules: 'ImageView[id=`com.sina.weibo:id/iv_ad_x`]',
    },
    {
      key: 2,
      name: '关闭不感兴趣广告弹窗',
      activityIds: [
        'com.sina.weibo.view.bottomsheet.dialog.',
        'com.sina.weibo.VisitorMainTabActivity',
      ],
      rules: {
        matches: [
          '[id="com.sina.weibo:id/tv_name"][text="为何会看到此广告"]',
          '[id="com.sina.weibo:id/tv_name"][text="不感兴趣"]',
        ],
        snapshotUrls: 'https://gkd-kit.gitee.io/import/12672985',
      },
    },
    {
      key: 3,
      name: '兴趣领域推荐',
      desc: '出现在长久未登录的账户再次登录时',
      activityIds: 'com.sina.weibo.account.interest.InterestActivity',
      rules:
        '[id="com.sina.weibo:id/rl_account_title_bar"] > [id="com.sina.weibo:id/tv_title_bar_skip"&&text="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12531405',
    },
    {
      key: 4,
      name: '精选博主推荐',
      desc: '出现在长久未登录的账户再次登录时',
      activityIds: 'com.sina.weibo.account.recommend.RecommendActivity',
      rules: [
        '[id="com.sina.weibo:id/tv_option"&&text="取消勾选"]',
        '[id="com.sina.weibo:id/new_next_btn"&&text="进入微博（已选0个）"]',
      ],
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12531433',
        'https://gkd-kit.songe.li/import/12531434',
      ],
    },
  ],
});
