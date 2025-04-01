import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sina.weibo',
  name: '微博',
  groups: [
    {
      key: 5,
      name: '局部广告-卡片广告',
      desc: '点击右上角关闭',
      fastQuery: true,
      rules: [
        {
          key: 1,
          activityIds: [
            'com.sina.weibo.feed.DetailWeiboActivity',
            '.feed.detailrefactor.DetailPageActivity',
          ],
          matches:
            '[vid="left_video_container"] + LinearLayout >2 [vid="close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13635551',
            'https://i.gkd.li/i/19525985',
          ],
        },
        {
          key: 4,
          activityIds: '.feed.detailrefactor.DetailPageActivity',
          matches: '@[vid="closeButton"] > [text="广告"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6952c2d1-65b5-4419-adb6-ba0f6349801e',
          snapshotUrls: 'https://i.gkd.li/i/19538265',
        },
      ],
    },
    {
      key: 6,
      name: '分段广告-评论区博主内容推荐',
      desc: '点击关闭-点击[不感兴趣]/[不想看到此类内容]',
      fastQuery: true,
      activityIds: [
        '.feed.DetailWeiboActivity',
        '.feed.detailrefactor.DetailPageActivity',
        '.story.gallery.feed.StoryFeedCommentsActivity2',
      ],
      rules: [
        {
          key: 0,
          matches: '@[vid="ll_close"] > [text="推荐"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/19551446',
            'https://i.gkd.li/i/19551850',
            'https://i.gkd.li/i/19552278',
          ],
        },
        // 预留key
        {
          preKeys: [0],
          key: 45,
          matchRoot: true,
          anyMatches: [
            '[text="不感兴趣"][clickable=true]',
            '@LinearLayout[clickable=true] >2 [text="不感兴趣" || text="不想看到此类内容"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/19551451',
            'https://i.gkd.li/i/19551857',
            'https://i.gkd.li/i/19552282',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      rules: [
        {
          key: 3,
          activityIds: 'com.sina.weibo.feed.MPDialogActivity',
          matches:
            'WebView[text="Wbox"] > View[childCount=1] > View[childCount=2] > @TextView[clickable=true][visibleToUser=true][childCount=0][index=1][width<200] <<n [vid="container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14969848',
            'https://i.gkd.li/i/16944794',
          ],
        },
        {
          key: 4,
          activityIds: 'com.sina.weibo.feed.MPDialogActivity',
          matches:
            '@Image[text="close"] < View[childCount=4] <2 * <<n [id="com.sina.weibo:id/container"]',
          snapshotUrls: 'https://i.gkd.li/i/14033735',
        },
      ],
    },
    {
      key: 9,
      name: '权限提示-通知权限',
      desc: '自动点击暂不开启',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: '.notifyguidev2.NotifyGuideV2Activity',
          matches: '[text="暂不开启"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18342279',
        },
      ],
    },
    {
      key: 14,
      name: '权限提示-定位权限',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          activityIds: ['.MainTabActivity', '.utils.WeiboDialog$CustomDialog'],
          matches: '@[text="以后再说"] +2 [text="去开启"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13218093',
            'https://i.gkd.li/i/13003311',
          ],
        },
        {
          key: 1,
          activityIds: '.MainTabActivity',
          matches:
            '@[id="com.sina.weibo:id/btn_close"] +2 [text="使用您的位置信息"]',
          snapshotUrls: 'https://i.gkd.li/i/13255595',
        },
      ],
    },
    {
      key: 17,
      name: '分段广告-评论区信息流广告',
      desc: '点击关闭-点击[不感兴趣]/[不想看到此类内容]',
      fastQuery: true,
      activityIds: [
        '.feed.DetailWeiboActivity',
        '.feed.detailrefactor.DetailPageActivity',
        '.story.gallery.feed.StoryFeedCommentsActivity2',
      ],
      rules: [
        {
          key: 0,
          matches: '@[vid="ll_close"] > [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13852321',
            'https://i.gkd.li/i/19526000',
            'https://i.gkd.li/i/19552278',
          ],
        },
        {
          key: 1,
          matches: '[vid="corner_marker_view"] >2 [vid="right_top_tag"]',
          snapshotUrls: 'https://i.gkd.li/i/14210775',
        },
        {
          key: 3,
          matches: [
            '[vid="left_img_ad_tag"][visibleToUser=true]',
            '[vid="close"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/16828094',
        },
        // 预留key
        {
          preKeys: [0, 1, 3],
          key: 90,
          matchRoot: true,
          anyMatches: [
            '[text="不感兴趣"][clickable=true]',
            '@LinearLayout[clickable=true] >2 [text="不感兴趣" || text="不想看到此类内容"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13852322',
            'https://i.gkd.li/i/13958782',
            'https://i.gkd.li/i/16785777',
            'https://i.gkd.li/i/14730274',
            'https://i.gkd.li/i/19551451',
            'https://i.gkd.li/i/19552282',
          ],
        },
      ],
    },
    {
      key: 18,
      name: '评价提示-APP评分弹窗',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainTabActivity',
          matches: '@[text="不了，谢谢"] +4 [text="喜欢，给好评"]',
          snapshotUrls: 'https://i.gkd.li/i/13620220',
        },
      ],
    },
    {
      key: 19,
      name: '功能类-自动点击查看原图',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.sina.weibo.photoalbum.imageviewer.ImageViewer',
          matches: '@LinearLayout >3 [vid="tv_dialog_item"][text^="原图"]',
          snapshotUrls: 'https://i.gkd.li/i/13929119',
        },
      ],
    },
    {
      key: 20,
      name: '功能类-超话自动签到',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '点击签到',
          activityIds: 'com.sina.weibo.supergroup.SGPageActivity',
          // excludeMatches: ['[text="关注"]', '[text="Follow"]'], 此写法会导致误触
          matches: [
            'ViewGroup[childCount=2] > [text="管理"][visibleToUser=true]',
            '[text="签到" || text="Sign in"] < [vid="right_button"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/15092999',
            'https://i.gkd.li/i/15092970', // 未关注超话防止误触
            'https://i.gkd.li/i/15136801',
          ],
        },
        {
          key: 1,
          name: '取消勾选[接收本超话签到提醒推送]',
          activityIds: 'com.sina.weibo.supergroup.pagepop.PagePopActivity',
          matches: '@[checked=true] < * > [text="接收本超话签到提醒推送"]',
          snapshotUrls: 'https://i.gkd.li/i/15103524',
        },
        {
          key: 2,
          name: '关闭签到成功弹窗',
          activityIds: 'com.sina.weibo.supergroup.pagepop.PagePopActivity',
          matches: ['[text^="连续签到"]', '[vid="iv_close_v2"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/15103524',
            'https://i.gkd.li/i/15136825',
            'https://i.gkd.li/i/15136842',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '功能类-超话一键签到',
      desc: '点击[一键签到]',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.sina.weibo.supergroup.generic.GenericChannelActivity',
          matches: [
            '[text*="一键签到"][visibleToUser=true]',
            '[vid="checkinBtn"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/3fad288d-ba21-44ed-8ebe-f9b4cbde1d3c',
          snapshotUrls: 'https://i.gkd.li/i/16420751',
        },
      ],
    },
    {
      key: 23,
      name: '其他-关闭猪手提示',
      desc: '点击[取消]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainTabActivity',
          matches: ['[text^="猪手超话自动签到失败"]', '[text="取消"]'],
          exampleUrls: 'https://e.gkd.li/92e08aea-ae70-4ea8-be65-442f8e2e423d',
          snapshotUrls: 'https://i.gkd.li/i/16827119',
        },
      ],
    },
    {
      key: 24,
      name: '功能类-关闭点赞时的验证',
      rules: [
        {
          activityIds: '.geetest.GeetCheckActivityForNet',
          matches:
            'Button[text^="关闭验证"][clickable=true][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/7a8ed873-a6e8-4260-9f5c-3ff05d5788db',
          snapshotUrls: 'https://i.gkd.li/i/16827853',
        },
      ],
    },
    {
      key: 25,
      name: '功能类-关主页自动切换到[关注的人]TAB',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: '.flowbusiness.commonpage.FlowCommonPageActivity',
          matches: '@[clickable=true] >2 [text="关注的人"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6ef5bbf7-bb11-4cbb-b46b-bdc7c333a617',
          snapshotUrls: 'https://i.gkd.li/i/18423013',
        },
      ],
    },
  ],
});
