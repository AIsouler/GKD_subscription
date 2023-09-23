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
    {
      key: 5,
      name: '帖子详情底部，评论区顶部广告',
      desc: '点击右上角x',
      activityIds: 'com.sina.weibo.feed.DetailWeiboActivity',
      rules: [
        {
          matches:
            '[id="com.sina.weibo:id/left_img_container"] + LinearLayout >2 [id="com.sina.weibo:id/close"][clickable=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12673043',
        },
        {
          matches:
            '[id="com.sina.weibo:id/corner_marker_view"] >2 [id="com.sina.weibo:id/right_top_tag"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12673051',
        },
      ],
    },
    {
      key: 6,
      name: '评论区博主内容推荐',
      desc: '评论区同一博主其他博文推荐',
      rules: [
        {
          activityIds: ['com.sina.weibo.utils.WeiboDialog$CustomDialog'],
          matches: 'TextView[text="不感兴趣"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12674511',
        },
        {
          activityIds: ['com.sina.weibo.feed.DetailWeiboActivity'],
          matches: '[text="推荐"] < [id="com.sina.weibo:id/ll_close"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12674498',
        },
      ],
    },
    {
      key: 7,
      name: '首页顶部话题分享窗口',
      activityIds: ['com.sina.weibo.MainTabActivity'],
      rules:
        '[id="com.sina.weibo:id/tvGuide"] + [id="com.sina.weibo:id/v_close"] + [id="com.sina.weibo:id/iv_close"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12705972'],
    },
    {
      key: 8,
      name: '发现页广告弹窗',
      activityIds: ['com.sina.weibo.page.ad.DiscoverAdDialog'],
      rules:
        '[id="com.sina.weibo:id/ad_portrait_layout"] + [id="com.sina.weibo:id/btn_close"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12705974'],
    },
    {
      enable: false,
      key: 9,
      name: '请求开启通知弹窗',
      desc: '自动点击暂不开启',
      activityIds: ['com.sina.weibo.notifyguidev2.NotifyGuideV2Activity'],
      rules:
        '@[id="com.sina.weibo:id/bt_cancel"][text="暂不开启"] + [id="com.sina.weibo:id/bt_confirm"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12705979'],
    },
    {
      enable: false,
      key: 10,
      name: '请求开启通知提示信息',
      desc: '自动点击x按钮',
      activityIds: ['com.sina.weibo.MainTabActivity'],
      rules:
        '[text^="打开通知"] < LinearLayout + ImageView[id="com.sina.weibo:id/right_icon"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12705986'],
    },
  ],
});
