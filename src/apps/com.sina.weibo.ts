import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sina.weibo',
  name: '微博',
  deprecatedKeys: [12],
  groups: [
    {
      key: 3,
      name: '全屏广告-兴趣领域推荐',
      desc: '出现在长久未登录的账户再次登录时',
      quickFind: true,
      activityIds: 'com.sina.weibo.account.interest.InterestActivity',
      rules:
        '[id="com.sina.weibo:id/rl_account_title_bar"] > [id="com.sina.weibo:id/tv_title_bar_skip"][text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12531405',
    },
    {
      key: 4,
      name: '全屏广告-精选博主推荐',
      desc: '出现在长久未登录的账户再次登录时',
      quickFind: true,
      activityIds: 'com.sina.weibo.account.recommend.RecommendActivity',
      rules: [
        '[id="com.sina.weibo:id/tv_option"&&text="取消勾选"]',
        '[id="com.sina.weibo:id/new_next_btn"&&text="进入微博（已选0个）"]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/import/12531433',
        'https://i.gkd.li/import/12531434',
      ],
    },
    {
      key: 5,
      name: '局部广告-博文内容区与评论区中间卡片式广告',
      desc: '点击右上角x',
      quickFind: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.sina.weibo.feed.DetailWeiboActivity',
          matches:
            '[id="com.sina.weibo:id/left_img_container"] + LinearLayout >2 [id="com.sina.weibo:id/close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12673043',
        },
        {
          key: 1,
          activityIds: 'com.sina.weibo.feed.DetailWeiboActivity',
          matches:
            '[id="com.sina.weibo:id/left_video_container"] + LinearLayout >2 [id="com.sina.weibo:id/close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13635551',
        },
        {
          key: 2,
          activityIds: 'com.sina.weibo.feed.DetailWeiboActivity',
          matches:
            '[id="com.sina.weibo:id/corner_marker_view"] >2 [id="com.sina.weibo:id/right_top_tag"]',
          snapshotUrls: 'https://i.gkd.li/import/12673051',
        },
        {
          key: 3,
          activityIds: 'com.sina.weibo.feed.DetailWeiboActivity',
          matches:
            '[id="com.sina.weibo:id/tvTrendsTitle"] + [id="com.sina.weibo:id/iv_ad_x"]',
          snapshotUrls: 'https://i.gkd.li/import/13787207',
        },
      ],
    },
    {
      enable: false,
      key: 6,
      name: '局部广告-评论区博主内容推荐',
      desc: '评论区同一博主其他博文推荐',
      quickFind: true,
      rules: [
        {
          key: 0,
          activityIds: ['com.sina.weibo.feed.DetailWeiboActivity'],
          matches:
            'RelativeLayout[visibleToUser=true] - RelativeLayout >n @[id="com.sina.weibo:id/ll_close"] > [id="com.sina.weibo:id/tv_tips"] + [id="com.sina.weibo:id/iv_close_icon"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12674498',
            'https://i.gkd.li/import/13035647', // 限制 RelativeLayout[visibleToUser=true]，防止在这个快照中误触点赞按钮
          ],
        },
        {
          preKeys: 0,
          activityIds: [
            'com.sina.weibo.utils.WeiboDialog$CustomDialog',
            'com.sina.weibo.feed.DetailWeiboActivity',
          ],
          matches: 'TextView[text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12674511',
            'https://i.gkd.li/import/12929591',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-首页顶部话题分享窗口',
      quickFind: true,
      activityIds: ['com.sina.weibo.MainTabActivity'],
      rules:
        '[id="com.sina.weibo:id/tvGuide"] + [id="com.sina.weibo:id/v_close"] + [id="com.sina.weibo:id/iv_close"]',
      snapshotUrls: ['https://i.gkd.li/import/12705972'],
    },
    {
      key: 8,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.sina.weibo.business',
          quickFind: true,
          matches:
            '@[id="com.sina.weibo:id/btn_close"] - FrameLayout > [id="com.sina.weibo:id/ad_tag"]',
          snapshotUrls: 'https://i.gkd.li/import/12750090',
        },
        {
          key: 1,
          activityIds: 'com.sina.weibo.feed.MPDialogActivity',
          matches:
            'View[childCount=2] > @TextView[clickable=true] - View >n [text="元"]',
          snapshotUrls: 'https://i.gkd.li/import/13670266',
        },
        {
          key: 2,
          activityIds: 'com.sina.weibo.page.ad.DiscoverAdDialog',
          quickFind: true,
          matches:
            '[id="com.sina.weibo:id/ad_portrait_layout"] + [id="com.sina.weibo:id/btn_close"]',
          snapshotUrls: 'https://i.gkd.li/import/12705974',
        },
      ],
    },
    {
      enable: false,
      key: 9,
      name: '通知提示-请求开启通知弹窗',
      desc: '自动点击暂不开启',
      quickFind: true,
      activityIds: ['com.sina.weibo.notifyguidev2.NotifyGuideV2Activity'],
      rules:
        '@[id="com.sina.weibo:id/bt_cancel"][text="暂不开启"] + [id="com.sina.weibo:id/bt_confirm"]',
      snapshotUrls: ['https://i.gkd.li/import/12705979'],
    },
    {
      enable: false,
      key: 10,
      name: '通知提示-请求开启通知提示信息',
      desc: '自动点击x按钮',
      quickFind: true,
      activityIds: ['com.sina.weibo.MainTabActivity'],
      rules:
        '[text^="打开通知"] < LinearLayout + ImageView[id="com.sina.weibo:id/right_icon"]',
      snapshotUrls: ['https://i.gkd.li/import/12705986'],
    },
    {
      enable: false,
      key: 11,
      name: '局部广告-首页顶部签到卡片',
      desc: '自动点击x按钮',
      quickFind: true,
      activityIds: ['com.sina.weibo.MainTabActivity'],
      rules:
        '[id="com.sina.weibo:id/ll_check_in_container"] < FrameLayout - FrameLayout > TextView + [id="com.sina.weibo:id/v_close"]',
      snapshotUrls: ['https://i.gkd.li/import/12749876'],
    },
    {
      key: 13,
      name: '局部广告-悬浮广告',
      desc: '自动点击x按钮',
      quickFind: true,
      activityIds: 'com.sina.weibo.MainTabActivity',
      rules: [
        {
          key: 0,
          matches:
            '[id="com.sina.weibo:id/floating_window"] >2 [id="com.sina.weibo:id/close"]',
          snapshotUrls: 'https://i.gkd.li/import/12750118',
        },
        {
          key: 1,
          matches:
            '[id="com.sina.weibo:id/floating_window"] >n [id="com.sina.weibo:id/closeView"]',
          snapshotUrls: 'https://i.gkd.li/import/13206775',
        },
        {
          key: 2,
          matches:
            '[id="com.sina.weibo:id/tv_tag"] + @*[clickable=true] + [id="com.sina.weibo:id/countdown_btn_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13206841',
        },
      ],
    },
    {
      key: 14,
      name: '定位提示-请求定位权限弹窗',
      quickFind: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.sina.weibo.MainTabActivity',
            'com.sina.weibo.utils.WeiboDialog$CustomDialog',
          ],
          matches: '@[text="以后再说"] + * + [text="去开启"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13218093',
            'https://i.gkd.li/import/13003311',
          ],
        },
        {
          key: 1,
          activityIds: 'com.sina.weibo.MainTabActivity',
          matches:
            '@[id="com.sina.weibo:id/btn_close"] +2 [text="使用您的位置信息"]',
          snapshotUrls: 'https://i.gkd.li/import/13255595',
        },
      ],
    },
    {
      key: 15,
      name: '局部广告-评论区底部账号推荐关注悬浮窗',
      desc: '点击【x】',
      quickFind: true,
      activityIds: 'com.sina.weibo.feed.DetailWeiboActivity',
      rules:
        '@[id="com.sina.weibo:id/close_layout"] - LinearLayout [id="com.sina.weibo:id/btnFollow"]',
      snapshotUrls: 'https://i.gkd.li/import/13482954',
    },
    {
      key: 16,
      name: '局部广告-评论区底部转发推荐悬浮窗',
      desc: '点击【x】',
      quickFind: true,
      activityIds: 'com.sina.weibo.feed.DetailWeiboActivity',
      rules:
        '[text*="一键转发"] < LinearLayout +2 [id="com.sina.weibo:id/tv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13482960',
    },
    {
      key: 17,
      quickFind: true,
      name: '分段广告-评论区信息流广告',
      desc: '点击X-点击不感兴趣',
      rules: [
        {
          key: 0,
          activityIds: 'com.sina.weibo.feed.DetailWeiboActivity',
          matches: '[text="广告"] + [id="com.sina.weibo:id/iv_close_icon"]',
          snapshotUrls: 'https://i.gkd.li/import/13852321',
        },
        {
          preKeys: 0,
          key: 1,
          activityIds: 'com.sina.weibo.feed.DetailWeiboActivity',
          matches: '[text="不感兴趣"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13852322',
        },
        {
          preKeys: 0,
          key: 2,
          activityIds: 'com.sina.weibo.feed.DetailWeiboActivity',
          matches: '[text="不想看到此类内容"]',
          snapshotUrls: 'https://i.gkd.li/import/13958782',
        },
      ],
    },
    {
      key: 18,
      name: '评价提示-APP评分弹窗',
      desc: '点击【x】',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.sina.weibo.MainTabActivity',
      rules: '@[text="不了，谢谢"] +4 [text="喜欢，给好评"]',
      snapshotUrls: 'https://i.gkd.li/import/13620220',
    },
    {
      key: 19,
      quickFind: true,
      name: '功能类-自动点击查看原图',
      rules: [
        {
          activityIds: 'com.sina.weibo.photoalbum.imageviewer.ImageViewer',
          matches: '@LinearLayout >3 [vid="tv_dialog_item"][text^="原图"]',
          snapshotUrls: 'https://i.gkd.li/import/13929119',
        },
      ],
    },
    {
      key: 21,
      name: '全屏广告-最热钻超弹窗',
      desc: '点击X',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.sina.weibo.feed.MPDialogActivity',
          matches:
            '@Image[text="close"] < View[childCount=4] <2 * <<n [id="com.sina.weibo:id/container"]',
          snapshotUrls: 'https://i.gkd.li/import/14033735',
        },
      ],
    },
  ],
});
